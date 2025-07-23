// Obtener el ID del teléfono de la URL
function getPhoneIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id")
  return id ? Number.parseInt(id) : null
}

// Obtener los datos de los teléfonos desde localStorage
function getPhonesData() {
  const phonesData = localStorage.getItem("phonesData")
  return phonesData ? JSON.parse(phonesData) : []
}

// Función para calcular el precio final
function getFinalPrice(phone) {
  return phone.hasDiscount ? Math.round(phone.price * 0.95) : phone.price
}

// Función para generar el HTML del precio
function getPriceHTML(phone) {
  if (phone.hasDiscount) {
    const discountPrice = getFinalPrice(phone)
    return `
            <span class="original-price">${phone.price.toLocaleString("en-US")}$</span>
            <span class="discount-price">${discountPrice.toLocaleString("en-US")}$</span>
            <span class="discount-badge">-5%</span>
        `
  } else {
    return `<span class="regular-price">${phone.price.toLocaleString("en-US")}$</span>`
  }
}

// Función para generar el mensaje de WhatsApp
function generateWhatsAppMessage(phone) {
  const finalPrice = getFinalPrice(phone)

  if (phone.hasDiscount) {
    return encodeURIComponent(
      `Hola, estoy interesado en comprar el teléfono ${phone.brand} ${phone.name} que vi en su tienda en línea. ` +
        `Precio normal: ${phone.price.toLocaleString("en-US")}$. ` +
        `Precio con descuento online (5%): ${finalPrice.toLocaleString("en-US")}$. ` +
        `¿Podría darme más información sobre disponibilidad y envío? Gracias.`,
    )
  } else {
    return encodeURIComponent(
      `Hola, estoy interesado en comprar el teléfono ${phone.brand} ${phone.name} que vi en su tienda en línea. ` +
        `Precio: ${finalPrice.toLocaleString("en-US")}$. ` +
        `¿Podría darme más información sobre disponibilidad y envío? Gracias.`,
    )
  }
}

// Renderizar los detalles del teléfono
function renderPhoneDetails(phoneId) {
  const phones = getPhonesData()
  const phone = phones.find((p) => p.id === phoneId)

  if (!phone) {
    showErrorMessage()
    return
  }

  document.title = `${phone.name} - Yesmos Celulares`

  const productDetailElement = document.getElementById("product-detail")

  // Número de teléfono de la tienda
  const phoneNumber = "523531844881"

  // Crear mensaje para WhatsApp
  const whatsappMessage = generateWhatsAppMessage(phone)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  // Mostrar u ocultar el banner de descuento según el producto
  const discountBanner = document.querySelector(".discount-banner")
  if (phone.hasDiscount) {
    discountBanner.style.display = "flex"
  } else {
    discountBanner.style.display = "none"
  }

  productDetailElement.innerHTML = `
        <div class="product-detail-header">
            <span class="product-detail-brand">${phone.brand}</span>
            <h2 class="product-detail-name">${phone.name}</h2>
            <div class="product-detail-price">
                ${getPriceHTML(phone)}
            </div>
        </div>
        
        <div class="product-detail-content">
            <div class="product-detail-image">
                <img src="${phone.image}" alt="${phone.name}">
            </div>
            
            <div class="product-detail-info">
                <div class="product-detail-description">
                    ${phone.description}
                </div>
                
                <div class="product-detail-specs">
                    <h3>Especificaciones</h3>
                    <ul class="specs-list">
                        ${phone.specs
                          .map(
                            (spec) => `
                                <li><i class="fas fa-check"></i> ${spec}</li>
                            `,
                          )
                          .join("")}
                    </ul>
                </div>
                
                <a href="${whatsappUrl}" target="_blank" class="buy-button">
                    <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
                </a>
            </div>
        </div>
    `
}

// Mostrar mensaje de error si no se encuentra el teléfono
function showErrorMessage() {
  const productDetailElement = document.getElementById("product-detail")

  productDetailElement.innerHTML = `
        <div class="error-message">
            <h2>Producto no encontrado</h2>
            <p>Lo sentimos, no hemos podido encontrar el producto que buscas.</p>
            <a href="index.html" class="back-button">
                <i class="fas fa-arrow-left"></i> Volver al catálogo
            </a>
        </div>
    `
}

// Inicializar la página de detalles
function init() {
  const phoneId = getPhoneIdFromUrl()

  if (phoneId) {
    renderPhoneDetails(phoneId)
  } else {
    showErrorMessage()
  }
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", init)
