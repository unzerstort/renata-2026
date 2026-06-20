import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import RadialGradiantColorMask

qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
qr.add_data('unzerstort.github.io/renata-2026')
img = qr.make_image(image_factory=StyledPilImage, embedded_image_path="emoji.jpg",color_mask=RadialGradiantColorMask())
img.save('qrcode.png')
