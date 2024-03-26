import { mailOptions, transporter } from "../../config/nodemailer.js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // let auditSubject = `Audit zahtev od ${data.name}`;
    let messageSubject = `Poruka od ${data.name}`;
    let careerSubject = `Poruka od ${data.name} sa stranice Careers.`;

    // let auditContent = `<h1>${data.auditType} - audit zahtev od ${data.name} - ${data.email}</h1><p>${data.name} zahteva audit.</p>
    // <p>Ukoliko je odabrao neki od paketa sa Thank You stranice, </br>tip audita koji je odabrao će biti dostupan u bazi podataka - <a href="https://console.firebase.google.com/u/3/project/wlastig-website/firestore/data/~2Fclients~2F2uMRw0AsoIo9Pqr3llgZ">ovde</a>.</p>`;
    let messageContent = `<h1>Poruka od ${data.name} - ${data.email}</h1>
		<ul>
		<li>Email: ${data.email}</li>
		<li>Name: ${data.name}</li>
		<li>Company Website: ${data.website}</li>
		<li>Comments: ${data.comments}</li>
		</ul>
		`;
    let careerContent = `<h1>Poruka od ${data.name} - ${data.email}</h1>
		<ul>
		<li>Email: ${data.email}</li>
		<li>Name: ${data.name}</li>
		<li>Cover Letter: ${data.cover}</li>
		<li>CV file: <a href='${data.cv}'>${data.name}&#8629;</a></li>
		</ul>
		`;

    let subject;
    let html;
    switch (data.type) {
      case "audit":
        subject = auditSubject;
        html = auditContent;
        break;
      case "contact":
        subject = messageSubject;
        html = messageContent;
        break;
      case "career":
        subject = careerSubject;
        html = careerContent;
        break;
      default:
        subject = "";
        html = "";
    }

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
