// Datos y estado de la aplicación
let refacciones = []
let categoriaActiva = ""
let cotizacion = []
let mostrarResumen = true
const WHATSAPP_NUMBER = "523531844881" // Número de WhatsApp para contacto

// Mapeo de categorías con iconos
const categoriasConfig = {
    BATERIAS: { nombre: "Cambio de batería", icon: "fas fa-battery-half" },
    DISPLAY: { nombre: "Cambio de pantalla", icon: "fas fa-mobile-alt" },
    "CENTRO DE CARGA": { nombre: "Cambio de centro de carga", icon: "fas fa-plug" },
    "FLEX DE CARGA": { nombre: "Cambio de flex de carga", icon: "fas fa-bolt" },
    TAPAS: { nombre: "Cambio de tapa", icon: "fas fa-shield-alt" },
    ACCESORIOS: { nombre: "Accesorios", icon: "fas fa-tools" },
    "BANDEJAS SIM": { nombre: "Bandejas SIM", icon: "fas fa-sim-card" },
    LENTES: { nombre: "Lentes de cámara", icon: "fas fa-camera" },
    "FLEX INTERCONEXION": { nombre: "Flex de interconexión", icon: "fas fa-link" },
}

// Elementos del DOM
const elements = {
    loading: document.getElementById("loading"),
    searchInput: document.getElementById("searchInput"),
    brandFilter: document.getElementById("brandFilter"),
    categoriesGrid: document.getElementById("categoriesGrid"),
    categoryTitle: document.getElementById("categoryTitle"),
    productsCount: document.getElementById("productsCount"),
    productsList: document.getElementById("productsList"),
    serviceBadge: document.getElementById("serviceBadge"),
    serviceCount: document.getElementById("serviceCount"),
    emptyQuote: document.getElementById("emptyQuote"),
    quoteItems: document.getElementById("quoteItems"),
    quoteList: document.getElementById("quoteList"),
    totalAmount: document.getElementById("totalAmount"),
    toggleQuote: document.getElementById("toggleQuote"),
    whatsappBtn: document.getElementById("whatsappBtn"),
    downloadBtn: document.getElementById("downloadBtn"),
    printBtn: document.getElementById("printBtn"),
}

function calcularPrecioFinal(precioOriginal, categoria, nombreProducto) {
    const redondearCentena = (precio) => Math.floor(precio / 100) * 100

    const nombre = nombreProducto.toLowerCase()
    const cat = categoria.trim().toUpperCase()

    // TAPAS
    if (cat === "TAPAS") {
        const precioFinal = nombre.includes("iphone") || nombre.includes("ip")
            ? 900
            : 550

        return {
            original: precioOriginal,
            redondeado: redondearCentena(precioOriginal),
            incremento: 0,
            conIncremento: precioFinal,
            descuentoAdicional: 100,
            final: precioFinal,
            totalDescuento: 100,
        }
    }

    // Categorías con precios fijos
    const categoriasFijas = {
        "BANDEJAS SIM": 350,
        "FLEX INTERCONEXION": 350,
        "CENTRO DE CARGA": 350,
        "LENTES": 350,
        "FLEX DE CARGA": 550,
    }

    if (categoriasFijas[cat]) {
        const precioFinal = categoriasFijas[cat]

        return {
            original: precioOriginal,
            redondeado: redondearCentena(precioOriginal),
            incremento: 0,
            conIncremento: precioFinal,
            descuentoAdicional: 100,
            final: precioFinal,
            totalDescuento: 100,
        }
    }

    // 🔍 Si ya es centena exacta, solo sumar 100
    if (precioOriginal % 100 === 0) {
        const precioFinal = precioOriginal + 200

        return {
            original: precioOriginal,
            redondeado: precioOriginal,
            incremento: 0,
            conIncremento: precioOriginal,
            descuentoAdicional: 100,
            final: precioFinal,
            totalDescuento: 100,
        }
    }

    // Lógica general con redondeo e incremento
    const centena = Math.floor(precioOriginal / 100) * 100
    const siguienteCentena = centena + 100
    const mitadCentena = centena + 50

    const distanciaCentena = Math.abs(precioOriginal - siguienteCentena)
    const distanciaMitad = Math.abs(precioOriginal - mitadCentena)

    let precioRedondeado
    let incremento

    if (distanciaCentena <= distanciaMitad) {
        precioRedondeado = siguienteCentena
        incremento = 100
    } else {
        precioRedondeado = mitadCentena
        incremento = 150
    }

    const precioConIncremento = precioRedondeado + incremento
    const descuentoAdicional = 100
    const precioFinalConDescuento = precioConIncremento + descuentoAdicional

    return {
        original: precioOriginal,
        redondeado: precioRedondeado,
        incremento: incremento,
        conIncremento: precioConIncremento,
        descuentoAdicional: descuentoAdicional,
        final: precioFinalConDescuento,
        totalDescuento: descuentoAdicional,
    }
}


// Inicialización
document.addEventListener("DOMContentLoaded", async () => {
    await cargarRefacciones()
    inicializarEventListeners()
    renderizarCategorias()
    actualizarFiltroMarcas()
    elements.loading.style.display = "none"
})

// Cargar datos de refacciones
async function cargarRefacciones() {
    try {
        // Cargar desde archivo JSON en carpeta separada
        const response = await fetch("../JSON/refacciones.json")

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        refacciones = await response.json()
        console.log("Refacciones cargadas:", refacciones.length)
    } catch (error) {
        console.error("Error cargando refacciones:", error)

        // Mostrar mensaje de error al usuario
        elements.loading.innerHTML = `
            <div class="loading-error">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #dc2626; margin-bottom: 1rem;"></i>
                <h3>Error al cargar los datos</h3>
                <p>No se pudo cargar el archivo de refacciones.</p>
                <p>Asegúrate de que el archivo esté en: <code>./data/refacciones.json</code></p>
                <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--primary-color); color: white; border: none; border-radius: 0.5rem; cursor: pointer;">
                    Reintentar
                </button>
            </div>
        `

        // Datos de fallback mínimos para desarrollo
        refacciones = [
            {
                Nombre: "Producto de ejemplo",
                Proveedor: null,
                "Precio Compra": 100,
                "Precio Venta": 420,
                "Existencia mínimo": 0,
                Existencias: 5,
                Pedidos: 0,
                Referencia: "ACCESORIOS",
            },
        ]
    }
}

// Event listeners
function inicializarEventListeners() {
    elements.searchInput.addEventListener("input", filtrarProductos)
    elements.brandFilter.addEventListener("change", filtrarProductos)
    elements.toggleQuote.addEventListener("click", toggleResumen)
    elements.whatsappBtn.addEventListener("click", enviarWhatsApp)
    elements.downloadBtn.addEventListener("click", descargarCotizacion)
    elements.printBtn.addEventListener("click", imprimirCotizacion)
}

// Renderizar categorías
function renderizarCategorias() {
    const categorias = [...new Set(refacciones.map((item) => item.Referencia).filter(Boolean))]

    elements.categoriesGrid.innerHTML = categorias
        .map((categoria) => {
            const config = categoriasConfig[categoria] || {
                nombre: categoria,
                icon: "fas fa-cog",
            }

            return `
            <button class="category-btn" onclick="seleccionarCategoria('${categoria}')">
                <div class="category-icon">
                    <i class="${config.icon}"></i>
                </div>
                <div class="category-name">${config.nombre}</div>
            </button>
        `
        })
        .join("")
}

// Seleccionar categoría
function seleccionarCategoria(categoria) {
    categoriaActiva = categoria

    // Actualizar UI de categorías
    document.querySelectorAll(".category-btn").forEach((btn) => {
        btn.classList.remove("active")
    })
    event.target.closest(".category-btn").classList.add("active")

    // Actualizar título
    const config = categoriasConfig[categoria] || { nombre: categoria, icon: "fas fa-cog" }
    elements.categoryTitle.innerHTML = `
        <i class="${config.icon}"></i>
        ${config.nombre}
    `

    filtrarProductos()
}

// Filtrar productos
function filtrarProductos() {
    if (!categoriaActiva) {
        elements.productsList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-mobile-alt empty-icon"></i>
                <p>Selecciona una categoría para ver los productos disponibles</p>
            </div>
        `
        elements.productsCount.textContent = "0 disponibles"
        return
    }

    const busqueda = elements.searchInput.value.toLowerCase()
    const marcaFiltro = elements.brandFilter.value

    const productosFiltrados = refacciones.filter((item) => {
        if (item.Referencia !== categoriaActiva) return false
        if (item.Existencias <= 0) return false

        const coincideBusqueda = item.Nombre.toLowerCase().includes(busqueda)
        const coincideMarca = marcaFiltro === "todas" || extraerMarca(item.Nombre) === marcaFiltro

        return coincideBusqueda && coincideMarca
    })

    elements.productsCount.textContent = `${productosFiltrados.length} disponibles`

    if (productosFiltrados.length === 0) {
        elements.productsList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search empty-icon"></i>
                <p>No se encontraron productos para los filtros seleccionados</p>
            </div>
        `
        return
    }

    elements.productsList.innerHTML = productosFiltrados
        .map((producto) => {
            const enCotizacion = cotizacion.find((item) => item.producto.Nombre === producto.Nombre)
            const precios = calcularPrecioFinal(producto["Precio Venta"],producto["Referencia"], producto["Nombre"])

            return `
            <div class="product-item ${enCotizacion ? "in-quote" : ""}" data-id="${producto.Nombre}">
                <div class="product-content">
                    <div class="product-info">
                        <div class="product-name">${producto.Nombre}</div>
                        <div class="product-reference">${producto.Referencia}</div>
                        <div class="product-pricing">
                            <div class="product-price-final">Precio final: $${precios.final.toLocaleString()}</div>
                            <div class="product-discount">Descuento aplicable: $${precios.totalDescuento.toLocaleString()}</div>
                        </div>
                        <div class="product-stock">Stock: ${producto.Existencias}</div>
                    </div>
                    <div class="product-actions">
                        ${enCotizacion
                    ? `
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="actualizarCantidad('${producto.Nombre}', ${enCotizacion.cantidad - 1})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity-display">${enCotizacion.cantidad}</span>
                                <button class="quantity-btn" onclick="actualizarCantidad('${producto.Nombre}', ${enCotizacion.cantidad + 1})">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        `
                    : `
                            <button class="add-btn" onclick="agregarACotizacion('${producto.Nombre}')">
                                <i class="fas fa-plus"></i>
                                Agregar
                            </button>
                        `
                }
                    </div>
                </div>
            </div>
        `
        })
        .join("")
}

// Actualizar filtro de marcas
function actualizarFiltroMarcas() {
    const marcas = [...new Set(refacciones.map((item) => extraerMarca(item.Nombre)).filter(Boolean))]

    elements.brandFilter.innerHTML = `
        <option value="todas">Todas las marcas</option>
        ${marcas
            .sort()
            .map((marca) => `<option value="${marca}">${marca}</option>`)
            .join("")}
    `
}

// Extraer marca del nombre del producto
function extraerMarca(nombre) {
    const marcas = ["Samsung", "iPhone", "Xiaomi", "Huawei", "Oppo", "Motorola", "LG", "Honor", "Realme", "ZTE"]

    for (const marca of marcas) {
        if (
            nombre.toUpperCase().includes(marca.toUpperCase()) ||
            (nombre.toUpperCase().includes("SAM") && marca === "Samsung") ||
            (nombre.toUpperCase().includes("IP ") && marca === "iPhone") ||
            (nombre.toUpperCase().includes("MOTO") && marca === "Motorola")
        ) {
            return marca
        }
    }

    return "Otros"
}

// Agregar a cotización
function agregarACotizacion(nombreProducto) {
    const producto = refacciones.find((item) => item.Nombre === nombreProducto)
    if (!producto) return

    const existente = cotizacion.find((item) => item.producto.Nombre === nombreProducto)

    if (existente) {
        existente.cantidad += 1
    } else {
        cotizacion.push({
            producto: producto,
            categoria: categoriaActiva,
            cantidad: 1,
            precios: calcularPrecioFinal(producto["Precio Venta"],producto["Referencia"], producto["Nombre"]),
        })
    }

    actualizarCotizacion()
    filtrarProductos() // Actualizar vista de productos
}

// Actualizar cantidad
function actualizarCantidad(nombreProducto, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
        removerDeCotizacion(nombreProducto)
        return
    }

    const item = cotizacion.find((item) => item.producto.Nombre === nombreProducto)
    if (item) {
        item.cantidad = nuevaCantidad
        actualizarCotizacion()
        filtrarProductos() // Actualizar vista de productos
    }
}

// Remover de cotización
function removerDeCotizacion(nombreProducto) {
    const elemento = document.querySelector(`[data-id="${nombreProducto}"]`)
    if (elemento) {
        elemento.classList.add("removing")
        setTimeout(() => {
            cotizacion = cotizacion.filter((item) => item.producto.Nombre !== nombreProducto)
            actualizarCotizacion()
            filtrarProductos()
        }, 300)
    } else {
        cotizacion = cotizacion.filter((item) => item.producto.Nombre !== nombreProducto)
        actualizarCotizacion()
        filtrarProductos()
    }
}

// Actualizar cotización
function actualizarCotizacion() {
    const subtotal = cotizacion.reduce((sum, item) => sum + item.precios.final * item.cantidad, 0)
    const totalDescuentos = cotizacion.reduce((sum, item) => sum + item.precios.totalDescuento * item.cantidad, 0)
    const total = subtotal - totalDescuentos

    // Actualizar badge del header
    if (cotizacion.length > 0) {
        elements.serviceBadge.style.display = "block"
        elements.serviceCount.textContent = cotizacion.length
        elements.toggleQuote.style.display = "block"
    } else {
        elements.serviceBadge.style.display = "none"
        elements.toggleQuote.style.display = "none"
    }

    // Actualizar contenido de cotización
    if (cotizacion.length === 0) {
        elements.emptyQuote.style.display = "block"
        elements.quoteItems.style.display = "none"
    } else {
        elements.emptyQuote.style.display = "none"
        elements.quoteItems.style.display = "block"

        elements.quoteList.innerHTML = cotizacion
            .map(
                (item) => `
            <div class="quote-item">
                <div class="quote-item-header">
                    <div class="quote-item-info">
                        <div class="quote-item-name">${item.producto.Nombre}</div>
                        <div class="quote-item-category">${item.categoria}</div>
                    </div>
                    <button class="remove-btn" onclick="removerDeCotizacion('${item.producto.Nombre}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="quote-item-pricing">
                    <div class="quote-item-price">$${item.precios.final.toLocaleString()} c/u</div>
                    <div class="quote-item-discount">-$${item.precios.totalDescuento.toLocaleString()} descuento</div>
                </div>
                <div class="quote-item-footer">
                    <span>Cant: ${item.cantidad}</span>
                    <span class="quote-item-subtotal">$${(item.precios.final * item.cantidad).toLocaleString()}</span>
                </div>
            </div>
        `,
            )
            .join("")

        // Agregar efecto de entrada escalonado
        setTimeout(() => {
            document.querySelectorAll(".quote-item").forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`
            })
        }, 50)

        // Mostrar resumen de totales
        elements.quoteList.innerHTML += `
            <div class="quote-summary">
                <div class="quote-summary-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toLocaleString()}</span>
                </div>
                <div class="quote-summary-row discount">
                    <span>Descuento total:</span>
                    <span>-$${totalDescuentos.toLocaleString()}</span>
                </div>
                <div class="quote-summary-row total">
                    <span>Total a pagar:</span>
                    <span>$${total.toLocaleString()}</span>
                </div>
            </div>
        `

        elements.totalAmount.textContent = `$${total.toLocaleString()}`
    }
}

// Toggle resumen
function toggleResumen() {
    mostrarResumen = !mostrarResumen
    const icon = elements.toggleQuote.querySelector("i")
    const quoteList = elements.quoteList

    elements.toggleQuote.classList.add("collapsed")

    if (mostrarResumen) {
        quoteList.style.maxHeight = "0"
        quoteList.style.opacity = "0"
        setTimeout(() => {
            quoteList.style.display = "block"
            quoteList.style.maxHeight = "20rem"
            quoteList.style.opacity = "1"
        }, 50)
        icon.className = "fas fa-minus"
        elements.toggleQuote.classList.remove("collapsed")
    } else {
        quoteList.style.maxHeight = "0"
        quoteList.style.opacity = "0"
        setTimeout(() => {
            quoteList.style.display = "none"
        }, 300)
        icon.className = "fas fa-plus"
    }
}

// Imprimir cotización con plantilla específica
function imprimirCotizacion() {
    if (cotizacion.length === 0) {
        alert("No hay productos en la cotización para imprimir")
        return
    }

    const subtotal = cotizacion.reduce((sum, item) => sum + item.precios.final * item.cantidad, 0)
    const totalDescuentos = cotizacion.reduce((sum, item) => sum + item.precios.totalDescuento * item.cantidad, 0)
    const total = subtotal - totalDescuentos

    const plantillaImpresion = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Cotización de Reparación</title>
            <style>
                @media print {
                    body { margin: 0; font-family: Arial, sans-serif; }
                    .no-print { display: none !important; }
                }
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .company-name { font-size: 24px; font-weight: bold; color: #2563eb; }
                .company-subtitle { font-size: 14px; color: #666; margin-top: 5px; }
                .quote-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
                .quote-info div { flex: 1; }
                .quote-info strong { display: block; margin-bottom: 5px; }
                .items-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
                .items-table th, .items-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                .items-table th { background-color: #f8f9fa; font-weight: bold; }
                .items-table .text-right { text-align: right; }
                .items-table .discount { color: #059669; }
                .totals { margin-left: auto; width: 300px; }
                .totals-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
                .totals-row.total { font-weight: bold; font-size: 18px; border-bottom: 2px solid #333; }
                .totals-row.discount { color: #059669; }
                .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
                .print-btn { background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-bottom: 20px; }
                .print-btn:hover { background: #1d4ed8; }
            </style>
        </head>
        <body>
            <button class="print-btn no-print" onclick="window.print()">🖨️ Imprimir</button>
            
            <div class="header">
                <div class="company-name">REPARACIÓN DE EQUIPOS MÓVILES</div>
                <div class="company-subtitle">Cotización de Servicios</div>
            </div>
            
            <div class="quote-info">
                <div>
                    <strong>Fecha:</strong>
                    ${new Date().toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })}
                </div>
                <div>
                    <strong>Cotización #:</strong>
                    COT-${Date.now().toString().slice(-6)}
                </div>
                <div>
                    <strong>Válida hasta:</strong>
                    ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString("es-ES")}
                </div>
            </div>
            
            <table class="items-table">
                <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Producto</th>
                        <th class="text-right">Cant.</th>
                        <th class="text-right">Precio Unit.</th>
                        <th class="text-right">Descuento</th>
                        <th class="text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${cotizacion
            .map(
                (item) => `
                        <tr>
                            <td>${item.categoria}</td>
                            <td>${item.producto.Nombre}</td>
                            <td class="text-right">${item.cantidad}</td>
                            <td class="text-right">$${item.precios.final.toLocaleString()}</td>
                            <td class="text-right discount">-$${item.precios.totalDescuento.toLocaleString()}</td>
                            <td class="text-right">$${(item.precios.final * item.cantidad).toLocaleString()}</td>
                        </tr>
                    `,
            )
            .join("")}
                </tbody>
            </table>
            
            <div class="totals">
                <div class="totals-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toLocaleString()}</span>
                </div>
                <div class="totals-row discount">
                    <span>Descuento total:</span>
                    <span>-$${totalDescuentos.toLocaleString()}</span>
                </div>
                <div class="totals-row total">
                    <span>TOTAL A PAGAR:</span>
                    <span>$${total.toLocaleString()}</span>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Términos y condiciones:</strong></p>
                <ul>
                    <li>Esta cotización tiene validez de 30 días calendario.</li>
                    <li>Los precios incluyen mano de obra y repuestos.</li>
                    <li>El descuento aplicado es válido únicamente para esta cotización.</li>
                    <li>Se requiere autorización previa para cualquier trabajo adicional.</li>
                    <li>Garantía de 30 días en reparaciones realizadas.</li>
                </ul>
                <p style="text-align: center; margin-top: 30px;">
                    <strong>¡Gracias por confiar en nosotros!</strong>
                </p>
            </div>
        </body>
        </html>
    `

    const ventanaImpresion = window.open("", "_blank")
    ventanaImpresion.document.write(plantillaImpresion)
    ventanaImpresion.document.close()
}

function enviarWhatsApp() {
    if (cotizacion.length === 0) {
        alert("No hay productos en la cotización para enviar")
        return
    }

    let subtotalSinDescuento = 0
    let totalDescuentos = 0
    let totalFinal = 0

    const detallesProductos = cotizacion.map((item) => {
        const precios = calcularPrecioFinal(item.producto["Precio Venta"],item.producto["Referencia"], item.producto["Nombre"])
        const subtotalProducto = precios.final * item.cantidad
        const descuentoProducto = precios.totalDescuento * item.cantidad

        subtotalSinDescuento += subtotalProducto
        totalDescuentos += descuentoProducto

        return {
            ...item,
            precios: precios,
            subtotalProducto,
            descuentoProducto,
        }
    })

    totalFinal = subtotalSinDescuento - totalDescuentos

    const mensaje = `🔧 *COTIZACIÓN DE REPARACIÓN - EQUIPOS MÓVILES*

*Fecha:* ${new Date().toLocaleDateString("es-ES")}
*Cotización #:* COT-${Date.now().toString().slice(-6)}

*SERVICIOS SOLICITADOS:*
${detallesProductos
            .map((item) => {
                const marca = extraerMarca(item.producto.Nombre)
                const modelo = item.producto.Nombre.replace(marca, "").trim()

                return `• ${item.categoria}
${modelo} (${marca})
Cantidad: ${item.cantidad}
Precio ajustado: $${item.precios.final.toLocaleString()}
Descuento por unidad: $${item.precios.totalDescuento.toLocaleString()}
Subtotal: $${item.subtotalProducto.toLocaleString()}`
            })
            .join("\n\n")}

*RESUMEN DE TOTALES:*
Subtotal: $${subtotalSinDescuento.toLocaleString()}
Descuento total: -$${totalDescuentos.toLocaleString()}
*TOTAL A PAGAR: $${totalFinal.toLocaleString()}*

*Nota:* Esta cotización tiene validez de 30 días calendario.

¿Podrías confirmar la disponibilidad y agendar la reparación? ¡Gracias! 😊`

    const mensajeCodificado = encodeURIComponent(mensaje)
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`

    window.open(urlWhatsApp, "_blank")
}



// Descargar cotización
function descargarCotizacion() {
    const subtotal = cotizacion.reduce((sum, item) => sum + item.precios.final * item.cantidad, 0)
    const totalDescuentos = cotizacion.reduce((sum, item) => sum + item.precios.totalDescuento * item.cantidad, 0)
    const total = subtotal - totalDescuentos

    const contenido = `
COTIZACIÓN DE REPARACIÓN - EQUIPOS MÓVILES
==========================================

Fecha: ${new Date().toLocaleDateString()}
Cotización #: COT-${Date.now().toString().slice(-6)}

SERVICIOS SOLICITADOS:
${cotizacion
            .map(
                (item) =>
                    `• ${item.categoria} - ${item.producto.Nombre}
    Cantidad: ${item.cantidad} | Precio unitario: $${item.precios.final.toLocaleString()} | Descuento: $${item.precios.totalDescuento.toLocaleString()} | Subtotal: $${(item.precios.final * item.cantidad).toLocaleString()}`,
            )
            .join("\n")}

RESUMEN:
Subtotal: $${subtotal.toLocaleString()}
Descuento total: -$${totalDescuentos.toLocaleString()}
TOTAL A PAGAR: $${total.toLocaleString()}

Nota: Esta cotización tiene validez de 30 días.
    `

    const blob = new Blob([contenido], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `cotizacion_${new Date().toISOString().split("T")[0]}.txt`
    a.click()
    URL.revokeObjectURL(url)
}

// Utilidades
function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(precio)
}

// Manejo de errores global
window.addEventListener("error", (event) => {
    console.error("Error en la aplicación:", event.error)
})
