import SecureLS from 'secure-ls'

const secure = new SecureLS({
  isCompression: false,
  encodingType: import.meta.env.VITE_APP_SLS_ENCODING_TYPE,
  encryptionSecret: import.meta.env.VITE_APP_SLS_SECRET
})

export default secure
