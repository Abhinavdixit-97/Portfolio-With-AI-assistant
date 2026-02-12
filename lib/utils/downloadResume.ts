export const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resume/Abhinav_Dikshit_Resume.pdf'
  link.download = 'Abhinav_Dikshit_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
