// Datos de los teléfonos - Estructura actualizada con control de descuentos
const phones = [
    {
        id: 1,
        name: "iPhone 13",
        brand: "Apple",
        price: 9999,
        hasDiscount: true, // Producto con descuento
        image:
            "https://imgs.search.brave.com/Pr_Nr01c0v1Ak_ItTYNiObaVAZ6zl2cYf3t4Jwfyids/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY29udGVudHN0/YWNrLmlvL3YzL2Fz/c2V0cy9ibHQwODhl/NmZmZmJiYTIwZjE2/L2JsdGZjNTJjZTU2/YzQ3OTM3ZDYvNjdm/NmNiOWNjNTc1MGE3/Mzg2YjU5ZjRiL2lw/aG9uZV8xMy5hdmlm",
        description: "iPhone 13 con chip A15 Bionic y sistema avanzado de cámara dual de 12MP",
        specs: [
            "Pantalla Super Retina XDR de 6.1 pulgadas",
            "Chip A15 Bionic con CPU de 6 núcleos y GPU de 4 núcleos",
            "Sistema de cámara dual de 12MP (gran angular y ultra gran angular)",
            "Batería de hasta 19 horas de reproducción de video",
            "Conectividad 5G ultrarrápida",
            "Almacenamiento desde 128GB, 4GB de RAM",
        ],
    },
    {
        id: 2,
        name: "Samsung Galaxy A06",
        brand: "Samsung",
        price: 2249,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/E0em4n7_lfU-laOo0gOEFhYLax5b0qRp6vNvrQAuws4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2VsZXguY29tL2Nk/bi9zaG9wL2ZpbGVz/L1NBTVNVTkdBMDZO/RUdSTy0xMDAuanBn/P3Y9MTczMDI0MjQ0/NSZ3aWR0aD0xNDQ1",
        description: "Samsung Galaxy A06 con ROM de 64GB y RAM de 4GB",
        specs: [
            "Pantalla PLS LCD de 6.5 pulgadas",
            "Procesador Octa-core",
            "Cámara principal de 13MP",
            "Batería de 5000mAh",
            "Conectividad 4G LTE",
            "Almacenamiento de 64GB y RAM de 4GB",
        ],
    },
    {
        id: 3,
        name: "Samsung Galaxy A24 4G",
        brand: "Samsung",
        price: 4999,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/zcNzGb9ggd3aW7dhvzbQPPNxF4ytwlR9HS3eRNww2fs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90ZWNo/NTAxLnN0b3JlL2Nk/bi9zaG9wL2ZpbGVz/L3NhbXN1bmctZ2Fs/YXh5LWEyNC00Zy1w/YWtpc3Rhbi1mNXV5/dy01MDB4NTAwXzUw/MHgud2VicD92PTE3/MDI4MjA2MDQ",
        description: "Samsung Galaxy A24 4G con ROM de 128GB y RAM de 4GB",
        specs: [
            "Pantalla Super AMOLED de 6.5 pulgadas",
            "Procesador MediaTek Helio G99",
            "Sistema de cámara de 50MP",
            "Batería de 5000mAh con carga rápida de 25W",
            "Conectividad 4G LTE",
            "Almacenamiento de 128GB y RAM de 4GB",
        ],
    },
    {
        id: 4,
        name: "Motorola E14",
        brand: "Motorola",
        price: 1950,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/HIVk_-hnSs3ZAUlUu6NMR6FU10Esgg5RGe8F_PMA7rQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzL2MxN2Qz/Zi80MTNnejBpd3Vn/bC5fc2w1MDBfL29y/aWdpbmFsLndlYnA",
        description: "Motorola E14 con ROM de 64GB y RAM de 4GB",
        specs: [
            "Pantalla IPS LCD de 6.6 pulgadas",
            "Procesador Unisoc T606",
            "Cámara principal de 13MP",
            "Batería de 5000mAh",
            "Conectividad 4G LTE",
            "Almacenamiento de 64GB y RAM de 4GB",
        ],
    },
    {
        id: 5,
        name: "ZTE Axon 60 Lite",
        brand: "ZTE",
        price: 2450,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/EyKv9s0BFFSEA3ZvzxmDaDxNoetUDzTHxfxmnuId1-U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2VsZXguY29tL2Nk/bi9zaG9wL2ZpbGVz/L1p0ZS1BeG9uLTYw/LUxpdGVfOS5qcGc_/dj0xNzE3NzEzMDgy/JndpZHRoPTE0NDU",
        description: "ZTE Axon 60 Lite con ROM de 256GB y RAM de 4GB",
        specs: [
            "Pantalla IPS LCD de 6.6 pulgadas",
            "Procesador Unisoc T606",
            "Sistema de cámara de 50MP",
            "Batería de 5000mAh",
            "Conectividad 4G LTE",
            "Almacenamiento de 256GB y RAM de 4GB",
        ],
    },
    {
        id: 6,
        name: "ZTE A54",
        brand: "ZTE",
        price: 1750,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/tAP1XvOVz3n7gs1CoFh3ciszw4au8lYbdUEpDcbEv8c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/NzAzMDUtTUxVNzc1/ODQ1MzA5NjJfMDcy/MDI0LU8ud2VicA",
        description: "ZTE A54 con ROM de 128GB y RAM de 4GB",
        specs: [
            "Pantalla IPS LCD de 6.6 pulgadas",
            "Procesador Octa-core",
            "Cámara principal de 13MP",
            "Batería de 5000mAh",
            "Conectividad 4G LTE",
            "Almacenamiento de 128GB y RAM de 4GB",
        ],
    },
    {
        id: 7,
        name: "Xiaomi Poco C75",
        brand: "Xiaomi",
        price: 2999,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/3rulhrBbaSYYcbrq6Qjco4r8dhOahALv9YpzSXJQ-vw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzL2FmZTVh/ZS81MWpwd2o2dXEx/bC5fc2w1MDBfL29y/aWdpbmFsLndlYnA",
        description: "Xiaomi Poco C75 con ROM de 256GB y RAM de 8GB",
        specs: [
            "Pantalla IPS LCD de 6.74 pulgadas",
            "Procesador Octa-core",
            "Sistema de cámara de 50MP",
            "Batería de 5000mAh con carga rápida",
            "Conectividad 4G LTE",
            "Almacenamiento de 256GB y RAM de 8GB",
        ],
    },
    {
        id: 8,
        name: "Oppo A40",
        brand: "Oppo",
        price: 3499,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/AFLXNiuA0H2ogRS0ITO9hnlHuDeOU3uqggXVv_JRN6g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzIwOTBl/ZC80MXYya2dxaC14/bC5fc2w1MDBfL29y/aWdpbmFsLndlYnA",
        description: "Oppo A40 con ROM de 128GB y RAM de 6GB",
        specs: [
            "Pantalla AMOLED de 6.43 pulgadas",
            "Procesador MediaTek Dimensity 6020",
            "Sistema de cámara de 64MP",
            "Batería de 5000mAh con carga rápida de 33W",
            "Conectividad 5G",
            "Almacenamiento de 128GB y RAM de 6GB",
        ],
    },
    {
        id: 9,
        name: "Oppo A58",
        brand: "Oppo",
        price: 4699,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/oa329u5SBpbsGmQgJ9PsVipIon3Cz9dlSmf4GmUgeMo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/b3Bwby1hNTgtNGcu/anBn",
        description: "Oppo A58 con ROM de 128GB y RAM de 6GB",
        specs: [
            "Pantalla IPS LCD de 6.72 pulgadas",
            "Procesador MediaTek Dimensity 700",
            "Sistema de cámara de 50MP",
            "Batería de 5000mAh con carga rápida de 33W",
            "Conectividad 5G",
            "Almacenamiento de 128GB y RAM de 6GB",
        ],
    },
    {
        id: 10,
        name: "Xmobile X55",
        brand: "Xmobile",
        price: 1100,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/wtcv7sHp02L6VvKS21VpH-Ga4lgTC9eqkL4uY1aKies/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kaXRl/Y21leC5jb20vY2Ru/L3Nob3AvZmlsZXMv/MDA5OTM2NF9jZWx1/bGFyLXgtbW9iaWxl/LXg1NS0yMTYtZ2It/YW5kcm9pZC0xMi01/NV81NTAuanBnP3Y9/MTcxODIyNDcxOSZ3/aWR0aD01MzM",
        description: "Xmobile X55 con ROM de 16GB y RAM de 16GB",
        specs: [
            "Pantalla IPS de 6.0 pulgadas",
            "Procesador Quad-core",
            "Cámara principal de 8MP",
            "Batería de 3000mAh",
            "Conectividad 4G LTE",
            "Almacenamiento de 16GB y RAM de 16GB",
        ],
    },
    {
        id: 11,
        name: "Alcatel 1",
        brand: "Alcatel",
        price: 999,
        hasDiscount: true,
        image:
            "https://imgs.search.brave.com/I3q7XSsqONJYEhibD0r0k_PnXi_dnLPRhLQaSnMbmMo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzgxd04yd29Jb3VM/LmpwZw",
        description: "Alcatel 1 con ROM de 16GB y RAM de 2GB",
        specs: [
            "Pantalla TFT de 5.0 pulgadas",
            "Procesador MediaTek MT6739",
            "Cámara principal de 5MP",
            "Batería de 2000mAh",
            "Conectividad 4G LTE",
            "Almacenamiento de 16GB y RAM de 2GB",
        ],
    },
    // NUEVOS MODELOS SIN DESCUENTO
    {
        id: 12,
        name: "Mini iPhone 16 Pro Max",
        brand: "Apple",
        price: 1399,
        hasDiscount: true,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqT-GF9IY9dbqykKeBWMauF0YjEXr4eI0CqAC4lQZyFX0TlwaxV9ZBrbUIr0ZuLRRSink&usqp=CAU",
        description: "Mini iPhone 16 Pro Max",
        specs: [
            "Almacenamiento de 512GB",
            "RAM de 12GB",
        ],
    },
    {
        id: 13,
        name: "Mini Samsung Galaxy S25 Ultra",
        brand: "Samsung",
        price: 1399,
        hasDiscount: true,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMW4_0oTA8td0MGQuIisyOHGNPRgN3jhTZQ&s",
        description: "Mini Samsung Galaxy S25 Ultra",
        specs: [
            "Almacenamiento de 512GB",
            "RAM de 12GB",
        ],
    },
    {
        id: 14,
        name: "CORN GT10 4G",
        brand: "Corn",
        price: 550,
        hasDiscount: false, // Sin descuento
        image:
            "https://cdn.quicksell.co/-M5mfJ9Y8f2UdhwcIe3E/products/-Nf3TDYqxExNN1NdZHAT.jpg",
        description: "Teléfono básico CORN GT10",
        specs: [
        ],
    },
    {
        id: 15,
        name: "NaomiCase Romy V2",
        brand: "NaomiCase",
        price: 320,
        hasDiscount: false, // Sin descuento
        image:
            "https://http2.mlstatic.com/D_NQ_NP_640476-MLM70811857464_082023-O-celular-economico-basico-romy-v2-rojo-naomicase-pantalla-color-gran-bocina.webp",
        description: "Teléfono básico NaomiCase Romy V2",
        specs: [
        ],
    },
    {
        id: 16,
        name: "NaomiCase Gold",
        brand: "NaomiCase",
        price: 600,
        hasDiscount: false, // Sin descuento
        image:
            "data:image/jpeg;base64,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",
        description: "Teléfono básico NaomiCase Gold",
        specs: [
        ],
    },
    {
        id: 17,
        name: "Blue Zoey Flex",
        brand: "Blue",
        price: 499,
        hasDiscount: false, // Sin descuento
        image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEhUPDw0QDw8QEBIQDw8PDxUQEA8PFRUWFhUVFRUYHyggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGhAQGjUlHyU3NSs3MCs3Ny82Ky8rLzU2MC4sNTA3NTc3Ky8tLS0uLS0rMi0tLTc3LS0tNzc3MSs3N//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGCAH/xABPEAABAwIABwwFCAcFCQEAAAABAAIDBBEFBgcSITGxEzIzNEFRYXFyc4GRInShsrMjQlJiksHR4RQVNVOTosIXJFRj8ERVZIKDw9Li8Rb/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAJhEBAAICAAQFBQAAAAAAAAAAAAECAxEhMUFxEjJRYaEEExTB0f/aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWnw/jRQ0ABq6lkRIu1ml0jhzhjbm3TayDcIo3qstOCmGzY6qUfSZHGG/zPB9ixH5cKD5tJUntZg2EoJTXxrgRcEEHURpBCid2XKk/wUtumQD+lWRl4pP8DN/E/wDVBL6KJo8u1CddHUDqLTtssmPLhgw66asHSGREDzkCCUEXHYHym4IqXBjarcnnU2dpjF+bO3t/FdgDfUg+oiICLR4yY10eD80VL350l8xkUTpXkDWbNGgdJsuVqsrtM25jwdXyBoJziyKNpA030yXA8EEjIuVxVx8pMIOMUbZI5Q3OzJQBcXt6JaSDrHmuqQEREBFrMNYfpKMA1M7Yy7S1ml0jh9VguSOlc1UZUKBps2Kpf0hjAD9pwPsQdwijt+Vmm+bSTHtOYNl1Zdlci5KGQ/8AWaP6UElIoyOV6L/AP/jN/wDFVNyvwctDN4SsP4IJLRRyzK/R/Oo6sdQid/WFtsG5SsFzENMz4HHQBPGWC/S8XaPNB2CKmN4cAWkEEXBBuCFUgIiILNbUCKN8rt7Gxzz1NBJ2LyvjFVPqHuqJ3h00zi95J5TyC/IBYAcgAXpnGriVV6pP8NyhPBGB6Ywh5gYS5oJuLgnq1HxQRldfM4c4UiVNHEzeQxtH1Y2t2BYriBzDyQR/UE6gDznQqGtPMfJd+57fpDzCoMg+kPMIOGAVbSOf712ZcOceaoLAdYB6xdBzuDw3O9JwF9VzbavQGRvC0ktO+mkdn/o7gIiTciFwu0X6CHAdACiiClj/AHbR1NA2Lv8AIkxrZaprWhrbxizRYfP028UEuIiIINyn4zbhhWVma14ZSU0YDwXBpvJIbadB+UHkFys2NUk4MAa0CYGM2aB6LhZ3suttljo2/rB8wHpuzWvH0g1gtbpXK4KibujHN0jSQejNcg6DEud1PXRG9vSF+p3o/evRzHXAPOF5kjlzaprvolnssV6WoH3jaedoQX1S94aC46gCT1BVLFwofkZe6k90oIAwxUyT1Ms0pJe95vc3zQNTR0AaAFjSxBX6rh5O8dtVM19TWPeQLkRtLs0c55kGucFQVbNfHnmIkte3QWuFtP8Aoq45BQVQVUVQSg+FUlfSVQSgmTI9hZ7430z3Fwjs6O/IDe46tHtUkqH8jZ+Wf2ApgQEREGrxq4lVeqz/AA3KGaOcx0e6AAlsV2g6i7UL9F7KZsauJVXqs/w3KE/9gd3bdoQcpVvzzd7s887zfyGodQ0LXytbzN8gsmGQOldG79GbYl7JKgWDXljG6SNdrXANxe+grKdRMkcCZ6GG4c525SE5ziS7SDoBvYACwA5NBW0V2lrjiectDLbmCw5AOb2LqaiibHa1TG+9tEesXvfysPtBZFJFcgCbN16ZNDdXKVLGHfVZr9HFo34vhwcjOZp8lSHPbqLm9RIUospTqdLHewIAeTnXNtGj/wCBbbBdS6kLnMEM+eGg5wJtvjo+/wAPHP2Y6S3/AAaz5b7ns4bFHCD5A9khLizNLXHXY3Fjz6vapXyLcNVdcexyiTFgWnqB9Y++5S3kX4ar649jlXlz5jU6S0iIjCA8rfHHdsbGriMWdLm9F7fY/Ndtlb447tt2NXFYsb7wPuhBnzH5a/T9y9KYCfeCM/UC81zcJf669H4sG9LEf8tuxBtFi4V4CXuZPdKyli4V4CXuZPdKDz9U8PJ3jtqu0dUGboHcsgJvzZotfo1q3U8PJ3jtqsVtKH6blptptyoOKrZGuq3OY8Pu+Q5zAQC03LRpA0jVq5F0hWPDgmKM3AueoDYshyDUzB9zxu1zvTFm+HQqYg/OF/0q1xvjHm+NuRbNytlB8KoJVRVBQSfka4eTsBTCodyMcNJ2ApiQEREGqxq4lVeqz/DcoTP7Pd3TdoU2Y1cSqvVZ/huUJv8A2e7uhtCDg37nu15c/cs5u6bkQJMywzswu0Z1tV102GqCkpa4sZRyTwbhTvjpv0l7XmaaKN1t0DS52lxAAAuSOo8y6J0khYxjnuI3rGlzrBtybDmC6+lw9UNqzWuwbnyshihaxwlaIiI2RNlBFiH2tbmL9GmymquY44RMeijDWBoYKmcRysfDT1ETNwfNaokDgDIxrgDfMIcwu5NGgraV2BIhJA1jDTCSnM9SN1/SYoI2ucXPjm1Seg29gSA4ht1qoHgl+bgzNa+VhzM6pe5m5526xZ5dnenZ2dfSM082jdw4TkGYIWOo2wsfHGyJ8ocGyuEr857jnOLiWu5rZtgpqxK9iredan59u/r7L9fQQsmfE1r2xsbG+IZ26PjL4WPtnG1wHPv05trHUvsjIzpZnW+tyjkO3yWYySWrn3WQ+kYwBnEgZjGEDNLuQkOd1lypZTlrQDoPNy6yneVjHfjWJtxiOW0ZYuj+81Q/zHfEcpYyL8NVdcexyijAA/vVV3jviOUr5F+Gq+uPY5VJ5vP380paREWGqAsrfHHdtuwLisV994HY1drlb447tt2NXFYr77wOxqDYS789s7V6MxV4pD3bdgXnKXfntnavRuKnFIe7bsCDbLFwrwEvcye6VlLFwrwEvcye6UHn+p4eTvHbV9m1L5U8PJ3jtq+zakGulWO9ZbC0PaXaWh7S4WvdtxfRy6F0lThDBJLrQszTLC6PNprFsbZGmQH0G6C24sS7Wg4tytldFGcHtmle6XOhlE4iY2lJ/Ry83jJDxazRo9HTzLAwi6lEEUUTt1na6R00wh3Nrmk+g0FwD3WHPo5kGqKtlXCrZQSfkY4aTsBTEodyMcPJ2ApiQEREGqxq4lVeqz/DcoSk/Z7+5G0KbcauJVXqs/w3KEZf2c/uRtCDiqSvkp5jLEQH2tpbnDUDq6CAesLafrqV5LntjOcA1xDSwgDM0gtIIuI2A9DQBZYeDqqnjzxUUu7h7mkODg1zAAQQDyXufFreZVz4To80COmkieCLu3QvaRpv6JJtye1TVmvVcxXx8Is3dNhSYOMgzLufumc1nLpIFtVg5xda2snqWxo5nvY1h0tbm5otqzGCMaeyB/qy4+HDkDNIdI3qZceV1s6fHClG/ml6hDb23U8WxxDp4r/TVje427/Bk7QNyeSXODAS0gbmxmrTY6dfmr1cWlxLb5vJnAZwN3E6QBrLtOjkHMuIix5oGiw3XW03DCDoNz13Fx5L6/HyhPzpR/yk8h+/N8jqUUzXe1abYIy+KP1/XO4A41V9474jlK+Rfhqvrj2OUSYrzCSeokbfNe4vF9dnPcRfzUt5F+Gq+uPY5V5cu3OUtIiI1QFlb447tt2BcVivvvA7GrtcrfHHdtuwLisV994HY1BsJt+e2dq9GYqcUh7tuwLznLvz2yvRmKnFIe7bsQbZYuFeAl7mT3SspYuFeAl7mT3Sg8/1PDyd47avs2pfKnh5O8dtX2bUg1sqx3LIlWO9BaKoKuOVsoKSrZVwq2UEn5GOHk7sKYlDuRnh5O7G1TEgIiINVjVxKq9Vn+G5QjN+zn9EF/AaT7Apuxq4lVeqz/DcogwO0Gma0gEFliDpBBFiD0IIylKxRYuaCbAuaCdVmkgE+S6nCWLbQTucpaL6Gvbn26Abg267layTFt/79n8Mj70G5qMVcEhxH6xs0Twsa41lO7dInvDZHABuggG+nQtDBizETUNfUwhwa91CBW053ctdaziCQDYtNiW3021G1t+Kz/3zPslWzis/98z7JQYuMODYafcWxzNlkdA19QGyslbFMSQWBzNGi2q561qF0H/5h379v2D+KqZiyOWc+DPzQXcRx6UvZbtKmLIvw1X1x7HKO8D0EcDc1gOk3c46XOPSpEyL8NVdcexyCWkREEBZW+OO7bdgXFYr6/A7GrtcrfHHdtuxq4rFfX4HY1BsJd+e2dq9GYqcUh7tuxec5d+e8O1ejMVOKQ923Yg2yxcK8BL3MnulZSxcK8BL3MnulB5+qeHk7x21VTal8qOHk7x21fZtSDWyrHcsmVYz0FoqgqtyoKCkq2VcKoKCTsjHDyd2NqmJQ5kZ4eTuxtUxoCIiDVY1cSqvVZ/huUQ4F4u3shS9jVxKq9Vn+G5RDgXi7eyEGtr9awXLOrtawXILblQ5VuVDkFsqkKoqkIMunXd5F+GquuPY5cJTru8i/DVfXHscglpERBAWVvjju23YFxWK++8Dsau1yt8cd227GrisV994HY1BsJd+e2V6MxV4rF3bdgXnKXfntlejsWBaliH+W3Yg2qxcK8BL3MnulZSxcK8BL3MnulB5+qeHk7x21VTalRVcPJ3jtq+ynQgwJVjvWRIsdyC05UFVuVsoKSqCqyrZQSdkZ4eTuxtUxqHMjPDyd2NqmNAREQarGriVV6rP8NyiHAnF29kKX8auJVXqs/w3KIcDC1O0HWGjzQayv1rBcs6u1rBcgtuVDlW5UOQWyqAqyqAgzKdd3kX4ar649jlwlOu7yLj5aq64yOr0vwQS0iIggLK3xx3bbsauKxX33gdjV22V3jju23Y1cTivvvA7GoM6XhLfXK9KYAbanjH1AvNrG51QG88lvMr0zg1tomD6oQZKxcK8BL3MnulZSxcK8BL3MnulB58qj8vJ3jtqSlWat3y0nbKSPQY8isPVb3Ky4oKXKgr6SqSgpcqCqyqCgk3Izw8ndjapjUOZGeHk7sbVMaAiIg1eNPEqr1Wf4blE2daEFug5unpU0VMIkY6N2lr2uY7suFjtUEVQlpc6lqWubJE4x5zt7M0b2Rp1EOFj0aRyFBoa/Cjw6xY0+YWJ+teeP+b8lawi67rrDQbA4SH0D9r8l8OEB9A+f5LARBmmu+p/N+SpFZ9X2rEX1qDf0Ds7WFIOR8fL1PVF/wBxRvQy6mjSTqClzJFgiWKGSomYWPqX57WOFnNiAAaD06C7ozrciCQUREEBZZXZte4H6MTx1EAbQVwmL04Yb9BHsapJy64Ekkq4pmA2kpSx3NnRTNt4ndx9lRPg6J7RunzCS0HpIB2IOuxbj3aujA5ZGny0/cvS0LbNA5gFAmSDBxmrN0I9GJt7/WJ0ey6n5AWLhQXhlHPFJ7pWUvj23BB1EWKDzRhB3y8neO2q296zMaMGSUlVJDK0j0i5jjqkj5HA8vTzG61bnIPjnKglfCVTdB9KpKXXwoPhVJX0r4UEnZGR8vJ3Y2lTEo2yPYGfHG+okaW7pYMB0EtHL43KklAREQFrMN4ApaxuZUwMlHIXD0m35jrHgtmiCOKrI7g53BvqIr8jZnEDqzrrAfkVp/m19UOtzD/SpWRBERyKt5MIzeLWfgvn9io/3jL9hn4KXkQRKzIrF87CFR4Zg/pWXBkYoxv6qpf1yAe6ApPRByOA8nWDaQ5zIc9w050jjIb8/pErrGMDRYCwHIFUiAiIg12GcC09W1rZ2Z4Y4PbpIs4dWsdGpcdhfJVSTPvFJJBGX7o+GPN3MyWzc4XBLdHIDboUhIg0OK2KtPg9pZAD6Ru4uJJJ6z1LfIiAiIg12GMCU1W3MqIWSAaRnDS084OsHqXJVWSuhdvHyx9Afe32rrvkQRlJkih+bVy+Ib+Cx3ZIByVjvsBSqiCKP7H/APjXfYCrbkeZy1kng1o+5SoiCM4skFKN9Uzu8WjY1bvBWTfB0Dg/ct0cNIMhL7HqOgLsUQURRtaM1oAA1AKtEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=",
        description: "Teléfono básico Blue Zoey Flex",
        specs: [
        ],
    },
    {
        id: 18,
        name: "MKTEL Mini Teléfono",
        brand: "Mktel",
        price: 380,
        hasDiscount: false, // Sin descuento
        image:
            "data:image/png;base64,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",
        description: "Teléfono básico MKTEL Mini",
        specs: [
        ],
    },
    {
        id: 19,
        name: "i18 PRO",
        brand: "Genérico",
        price: 699,
        hasDiscount: false, // Sin descuento
        image:
            "data:image/jpeg;base64,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",
        description: "Teléfono básico i18 PRO",
        specs: [
        ],
    },
]

// Función para calcular el precio final (con o sin descuento)
function getFinalPrice(phone) {
    return phone.hasDiscount ? Math.round(phone.price * 0.95) : phone.price
}

// Función para obtener el texto del precio
function getPriceDisplay(phone) {
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

// Elementos del DOM
const searchInput = document.getElementById("search-input")
const brandFiltersContainer = document.getElementById("brand-filters")
const clearFiltersBtn = document.getElementById("clear-filters")
const productGrid = document.getElementById("product-grid")
const productCount = document.getElementById("product-count")
const noResults = document.getElementById("no-results")
const clearSearchBtn = document.getElementById("clear-search")

// Elementos del menú móvil
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

// Elementos de filtros
const filterBox = document.getElementById("filter-box")
const filterTitle = document.getElementById("filter-title")

// Estado de la aplicación
let searchQuery = ""
let selectedBrands = []

// Obtener marcas únicas
const brands = [...new Set(phones.map((phone) => phone.brand))]

// Funcionalidad del menú móvil
function initMobileMenu() {
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active")

            // Cambiar el ícono del menú
            const icon = menuToggle.querySelector("i")
            if (mobileMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars")
                icon.classList.add("fa-times")
            } else {
                icon.classList.remove("fa-times")
                icon.classList.add("fa-bars")
            }
        })

        // Cerrar menú al hacer clic en un enlace
        const mobileMenuLinks = mobileMenu.querySelectorAll("a")
        mobileMenuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active")
                const icon = menuToggle.querySelector("i")
                icon.classList.remove("fa-times")
                icon.classList.add("fa-bars")
            })
        })

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener("click", (event) => {
            if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove("active")
                const icon = menuToggle.querySelector("i")
                icon.classList.remove("fa-times")
                icon.classList.add("fa-bars")
            }
        })
    }
}

// Funcionalidad de filtros colapsables
function initFilters() {
    if (filterTitle && filterBox) {
        // Inicializar estado del filtro según el tamaño de pantalla
        if (window.innerWidth <= 768) {
            filterBox.classList.remove("active")
        } else {
            filterBox.classList.add("active")
        }

        // Manejar clic en el título del filtro
        filterTitle.addEventListener("click", (e) => {
            // Solo activar en móvil
            if (window.innerWidth <= 768) {
                filterBox.classList.toggle("active")
                e.stopPropagation()
            }
        })

        // Cerrar filtros al hacer clic fuera (solo en móvil)
        document.addEventListener("click", (event) => {
            if (window.innerWidth <= 768 && !filterBox.contains(event.target) && filterBox.classList.contains("active")) {
                filterBox.classList.remove("active")
            }
        })
    }
}

// Inicializar la aplicación
function init() {
    renderBrandFilters()
    renderProducts(phones)
    setupEventListeners()
    initMobileMenu()
    initFilters()
}

// Renderizar filtros de marca
function renderBrandFilters() {
    brandFiltersContainer.innerHTML = ""

    brands.forEach((brand) => {
        const brandCheckbox = document.createElement("div")
        brandCheckbox.className = "brand-checkbox"

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = `brand-${brand}`
        checkbox.checked = selectedBrands.includes(brand)
        checkbox.addEventListener("change", () => toggleBrand(brand))

        const label = document.createElement("label")
        label.htmlFor = `brand-${brand}`
        label.textContent = brand

        brandCheckbox.appendChild(checkbox)
        brandCheckbox.appendChild(label)
        brandFiltersContainer.appendChild(brandCheckbox)
    })

    // Mostrar u ocultar el botón de limpiar filtros
    if (selectedBrands.length > 0) {
        clearFiltersBtn.classList.add("visible")
    } else {
        clearFiltersBtn.classList.remove("visible")
    }
}

// Renderizar productos
function renderProducts(productsToRender) {
    productGrid.innerHTML = ""

    if (productsToRender.length === 0) {
        noResults.classList.remove("hidden")
        productGrid.classList.add("hidden")
    } else {
        noResults.classList.add("hidden")
        productGrid.classList.remove("hidden")

        productsToRender.forEach((phone) => {
            const productCard = document.createElement("div")
            productCard.className = "product-card"

            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${phone.image}" alt="${phone.name}">
                </div>
                <div class="product-content">
                    <span class="product-brand">${phone.brand}</span>
                    <h3 class="product-name">${phone.name}</h3>
                    <p class="product-description">${phone.description}</p>
                    <div class="product-price">${getPriceDisplay(phone)}</div>
                    <a href="detalle-producto.html?id=${phone.id}" class="view-details-btn">Ver detalles</a>
                </div>
            `

            productGrid.appendChild(productCard)
        })
    }

    // Actualizar contador de productos
    productCount.textContent = `${productsToRender.length} productos`
}

// Filtrar productos
function filterProducts() {
    const filteredPhones = phones.filter((phone) => {
        const matchesSearch =
            phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            phone.description.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(phone.brand)

        return matchesSearch && matchesBrand
    })

    renderProducts(filteredPhones)
}

// Alternar marca seleccionada
function toggleBrand(brand) {
    if (selectedBrands.includes(brand)) {
        selectedBrands = selectedBrands.filter((b) => b !== brand)
    } else {
        selectedBrands.push(brand)
    }

    renderBrandFilters()
    filterProducts()
}

// Limpiar todos los filtros
function clearAllFilters() {
    searchQuery = ""
    selectedBrands = []
    searchInput.value = ""

    renderBrandFilters()
    filterProducts()
}

// Configurar event listeners
function setupEventListeners() {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value
        filterProducts()
    })

    clearFiltersBtn.addEventListener("click", clearAllFilters)
    clearSearchBtn.addEventListener("click", clearAllFilters)

    // Listener para cambios de tamaño de ventana
    window.addEventListener("resize", () => {
        // Manejar menú móvil
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove("active")
            const icon = menuToggle.querySelector("i")
            if (icon) {
                icon.classList.remove("fa-times")
                icon.classList.add("fa-bars")
            }
        }

        // Manejar filtros
        if (window.innerWidth > 768) {
            filterBox.classList.add("active")
        } else if (!filterBox.classList.contains("user-activated")) {
            filterBox.classList.remove("active")
        }
    })
}

// Guardar los datos de los teléfonos en localStorage
localStorage.setItem("phonesData", JSON.stringify(phones))

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", init)
