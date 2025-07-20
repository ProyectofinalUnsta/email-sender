const config = {}

if(process.env.MODE === 'Development') {
    config.url = 3035,
    config.resendKey = 're_17i3JyTT_7ETQEn5zSTomr75QqAHh1LbD',
    config.sender = 'no-reply@eventum.lat',
    config.email = 'finalproyecto36@gmail.com'
}
else {
      config.url = process.env.PORT,
    config.resendKey = process.env.RESEND_API_KEY,
    config.email = process.env.EMAIL,
     config.sender = process.env.SENDER
}

export default config