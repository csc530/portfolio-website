import emailjs from '@emailjs/browser';

const serviceID = 'default_service';
const templateID = 'template_zwn6fj9';
emailjs.init('mhCMhgqfhd2Mb9WmX')
export default {
	sendEmail: (email: string, name: string, subject: string, message: string) => {
		return emailjs.send(serviceID, templateID, {email, name, message})
	}
}