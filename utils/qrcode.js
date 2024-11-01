import qrcode from 'qrcode';
const result = await qrcode.toDataURL('I am a pony!');
console.log(result);