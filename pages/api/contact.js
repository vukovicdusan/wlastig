import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const subjectMap = {
      audit: `Audit zahtev od ${data.name}`,
      contact: `Poruka od ${data.name}`,
      career: `Poruka od ${data.name} sa stranice Careers.`,
      freeConsultation: `Poruka od ${data.name}`,
    };

    const contentMap = {
      audit: `<h1>${data.auditType} - audit zahtev od ${data.name} - ${data.email}</h1><p>${data.name} zahteva audit.</p>`,
      contact: `<h1>Poruka od ${data.name} - ${data.email}</h1>
                <ul>
                  <li>Email: ${data.email}</li>
                  <li>Name: ${data.name}</li>
                  <li>Company Website: ${data.website}</li>
                  <li>Comments: ${data.comments}</li>
                </ul>`,
      career: `<h1>Poruka od ${data.name} - ${data.email}</h1>
               <ul>
                 <li>Email: ${data.email}</li>
                 <li>Name: ${data.name}</li>
                 <li>Cover Letter: ${data.cover}</li>
                 <li>CV file: <a href='${data.cv}'>${data.name}&#8629;</a></li>
               </ul>`,
    };

    const subject = subjectMap[data.type] || "";
    const html = contentMap[data.type] || "";

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject,
        html,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  res.status(400).json({ message: "Bad Request" });
};

export default handler;
