const config = {}

if(process.env.MODE === 'development') {
    config.url = 3035,
    config.resendKey = 're_17i3JyTT_7ETQEn5zSTomr75QqAHh1LbD'
    config.email = 'finalproyecto36@gmail.com'
}
else {
      config.url = process.env.PORT
    config.resendKey = process.env.RESEND_API_KEY
    config.email = process.env.EMAIL
}

export default config