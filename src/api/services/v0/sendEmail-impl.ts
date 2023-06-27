import nodemailer from 'nodemailer'


export class sendEmailService {
    public async sendEmail (email, fullName, message): Promise<any> {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "kiyome.kinoki.detox@gmail.com",
              pass: "hcuultvkfuqmjdpu", 
            },
          });
          
        let details = {
            from: email,
            to: "drvidallo17@gmail.com",
            subject:`From ${fullName}:`,
            text: message
        }

        transporter.sendMail(details, (err)=>{
            if(err){
                console.log(err)}
            else {
                console.log("email has been sent")
            }
        })
      return { success:"Email sent Success" }
    }
  }
  