interface MailProvider {
    sendMail(
      to: string, from: string, subject: string, filePath: string, variables: object
  )
}
  
export default MailProvider;