# Test Dango “Frontend Developer” v2

## Figma: 
https://www.figma.com/file/hBreBED9ttk1ugCUYHc8QT/ShopifyTest-v2?type=design&node-id=1-123&mode=design&t=mAQI6z9WePtvE5CR-0

## Objetivo:
Implementar el diseño proporcionado en el archivo de Figma con la mayor fidelidad posible y demostrar conocimientos de HTML, CSS y JS.

El entregable debe estar a la altura de lo que se pretende en un sitio de ecommerce de buena calidad, listo para subir a producción, funcionando perfectamente en todo el rango de anchos de viewport desde 360px en adelante y replicando con alto nivel de fidelidad al diseño dado.

## Notas
Las consultas son bienvenidas!
El CSS debe ser realizado con tailwind
Los sliders deben ser realizados con Swiper
Si se encuentra alguna pequeña inconsistencia en el Figma, se debe ponderar la consistencia y no debe ser replicada en la implementación.

## Criterios de aceptación
El código debe seguir buenas buenas prácticas.
Los entregables deben ser un repositorio de github y un link en algún sistema como github, Vercel o Netlify que permita  ver el resultado en forma sencilla..
El aspect-ratio de las imágenes no debe deformarse en ningún momento.

## Hero: 
Como usuario, clickeando las flechas puedo ver 3 conjuntos distintos de fotos y textos (elegir fotos del estilo de la que se ve) (las flechas se quedan quietas)

## Grilla de productos:
Como usuario, si clickeo en los botones “ADD TO CART” se abre algún tipo de modal que emula a un carrito simple
Como usuario, si  clickeo las flechas, veo una segunda página. Esta debe contener 7 elementos en vez de 8. 
Las dimensiones de cada item, y la cantidad de items por columna pueden variar para adaptarse a todo el rango de anchos de pantalla. El aspect-ratio de las imágenes debe ser constante.
Como usuario, puedo ver el precio total de los productos que voy agregando
Como usuario, puedo borrar productos agregados y ver como los precios se recalculan en tiempo real

Fase 1: Solo debe realizarse la grilla con su paginación y la parte de JS (lógica del Add to Cart y carrito). Se evaluará el Layout de la grilla, pero no del “carrito” cuya única finalidad es la parte lógica y no pretende exigir un gasto de tiempo más allá de dicho objetivo.

Fase 2: Se realiza el test completo incluyendo el top-bar, Main nav, ícono de carrito funcional, Hero y la grilla

