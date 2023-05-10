import { mailOptions, transporter } from "../../config/nodemailer.js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // if (!data.email || !data.message) {
    // 	return res.status(400).json({ message: "Bad request" })
    // }

    let auditSubject = `Audit zahtev od ${data.name}`;
    let messageSubject = `Poruka od ${data.name}`;
    let careerSubject = `Poruka od ${data.name} sa stranice Careers.`;

    let auditContent = `<h1>Audit zahtev od ${data.name} - ${data.email}</h1><p>${data.name} zahteva audit.</p> 
		<p>Ukoliko je odabrao neki od paketa sa Thank You stranice, </br>tip audita koji je odabrao će biti dostupan u bazi podataka - <a href="https://console.firebase.google.com/u/0/project/wlastig-90451/firestore/data/~2Fclients">ovde</a>.</p>`;
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
		</ul>
		`;

    let subject;
    let html;
    switch (data.type) {
      case "audit":
        subject = auditSubject;
        break;
      case "contact":
        subject = messageSubject;
        break;
      case "career":
        subject = careerSubject;
        break;
      default:
        subject = "";
    }

    switch (data.type) {
      case "audit":
        html = auditContent;
        break;
      case "contact":
        html = messageContent;
        break;
      case "career":
        html = careerContent;
        break;
      default:
        html = "";
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: subject,
        html: html,
        attachments: data.cv,
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
