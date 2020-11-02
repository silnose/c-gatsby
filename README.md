# c-gatsby

# Gatsby

<https://www.gatsbyjs.com/docs/>

Gatsby es un framework open source increíblemente rápido, tanto en desarrollo como en producción. Trabaja con un stack innovador, ya que integra tecnologías como React y GraphQL con diferentes fuentes de información como WordPress o Sanity.io.

Gatsby usa GraphQL para recolectar la información de nuestro sitio web desde diferentes fuentes: APIs, CMS o nuestro sistema de archivos. Y teniendo lista la información, renderiza nuestras vistas en React.js para construir sitios estáticos muy optimizados.

Entre muchas otras aplicaciones, la documentación oficial de React.js está construida con Gatsby: Reactjs.org

# Flujo Gatsby

![flujo-gatsby](./readmestatics/gatsby-flujo.png)

Funciona como un generador de sitios estaticos donde se apoya sobre plugins para traer informacion o generar funcionalidades y utiliza a React justo con GraphQL para generar las vistas de esta manera cada una de las rutas de nuestros sitio forman un componente, que ams tarde Gatsby con webpack empaquetan para generar un sitio estatico osea por cada vista existe un HTML.

# Diferencias entre SPA, SSR y Gatsby

https://platzi.com/blog/spa-vs-ssr-vs-static-site-generators/
<https://www.youtube.com/watch?v=xC4Yq_mXvPM&feature=youtu.be&ab_channel=Prismic>

- _React en Single Page Applications_

Este tipo de aplicaciones es muy común cuando trabajamos con React.js.

Las SPAs son páginas que siempre cargan el mismo archivo HTML. Este, a su vez, carga un archivo gigante de JavaScript con toda la lógica de nuestra apliacación (por ejemplo, usando React.js).

Estas páginas tienen una carga inicial muy lenta, ya que no podremos ver la información importante hasta que termine de cargar el archivo de JavaScript. Pero una vez termina la carga inicial, las SPAs son muy rápidas, incluso al navegar por diferentes secciones de nuestra aplicación.

Como el archivo de JavaScript tiene todo el código de nuestra aplicación, el tiempo de navegación pasa de segundos a milisegundos. No necesitamos hacer más requests al servidor. Pero en mucho casos debemos esperar algunos segundos para que termine la carga inicial y podamos utilizar la aplicación.

- _React en Server Side Rendering_

Diferentes herramientas como Next.js nos ayudan a utilizar React en el servidor para no afectar el SEO y disminuir el tiempo de carga de nuestra aplicación, todo esto sin perder interactividad.

El Server Side Rendering tradicional es muy común en aplicaciones construidas con WordPress, por ejemplo. Aunque estas páginas tienen un tiempo de carga muy corto, la carga debe repetirse cada vez que el usuario navega por nuestra aplicación, es decir, casi todas las veces que damos click en un link o botón.

Las herramientas de SSR con React.js son muy conscientes de este problema, por lo que convierten nuestra aplicación en una SPA inmediatamente después de que termina la carga inicial. Es decir, utilizan SSR en la primera carga y luego se convierten en SPAs para mejorar la navegación e interactividad de nuestro sitio.

- _React en Gatsby:_

Lo mejor de ambos mundos
Gatsby es un generador de sitios estáticos. Esto quiere decir que en vez de renderizar desde el servidor, lo que sucede cada vez que un usuario entra a nuestra aplicación, Gatsby renderiza el contenido solo una vez en la etapa de desarrollo. Nuestro servidor no debe renderizar todo el tiempo, solo envía el HTML inicial (ya renderizado) para que más adelante el navegador se encargue de cargar el código JavaScript que nos ayudará a que nuestra página funcione como una SPA.

De esta forma obtenemos todos los beneficios: por ser una SPA, seguimos teniendo una alta interactividad y navegación muy rápida, y además, conseguimos una carga inicial muy rápida, en algunos casos incluso superior a la del SSR.

# Gatsby vs. WordPress

Gatsby también nos ayuda a consumir información desde un CMS como WordPress. De esta forma podemos editar nuestro contenido desde una plataforma que ya conocemos sin que esto afecte al rendimiento de nuestra aplicación.

- Gatsby:

  - Utiliza el Virtual DOM (más velocidad)
  - Componentes
  - Hot Reloading
  - Code Splitting e imágenes responsivas

- WordPress:

  - Manejo manual del DOM
  - Debemos copiar y pegar para reutilizar - código (aunque las buenas prácticas nos pueden ayudar bastante)
  - Refresh para ver los cambios

# Gatsby - Garsby CLI y Starters

## Primeros pasos Gatsby

- Dependencias basicas

```
    npm add react gatsby react-dom
```

- Scripts

```
  "scripts": {
    "dev": "gatsby develop"
  },
```

- Folders
  - src
    - pages (index.js)

## Primeros pasos Gatsby-CLI

- Instalamos de manera global

```
sudo npm i -g gatsby-cli
```

- Generamos un proyecto

```
  gatsby new <proyectName>

  gatsby new firstSiteWithGatsbyCLI
```

## Primeros pasos con Starters

Los starters son proyectos creados con el fin de modificar el contenido y tener nuestro sitio listo sin necesidad de hacer configuraciones. Solo debemos copiar el nombre del starter y ejecutar el siguiente comando:

<https://www.gatsbyjs.com/starters/>

Para comenzar a utilizarlos seleccionamos uno de la web y corremos el siguiente comando:

```
  gatsby new <proyectName> <author>/<starterName>

  gatsby new blog gatsby.js/gatsby-starter-blog
```

# ESLint y Gatsby

Gatsby incluye una configuración integrada de ESLint . Para la mayoría de los usuarios, la configuración incorporada de ESLint es todo lo que necesita. Sin embargo, si tienes una configuración personalizada o una convención en tu equipo de trabajo podemos configurarlo.

- Instalación

Ya que Gatsby viene con ESLint configurado de base podemos añadir nuestra configuración inicializando desde la herramienta en node_modules:

```
npx eslint --init
```

Este comando va a lanzar un proceso de ayuda para configurar ESLint paso a paso, revisemos los elementos:

- 1. ¿Con qué objetivo vamos a usar ESLint?

  - En nuestro caso basta con revisar la sintaxis y encontrar problemas.

- 2. ¿Qué tipo de módulos va a utilizar nuestro proyecto?

  - Utilizaremos Javascript modules.

- 3. ¿Qué Framework/Biblioteca va a usar nuestro proyecto?

  - Nuestro proyecto va a utilizar React.

- 4. ¿En qué entorno corre nuestro proyecto?

  -

  - Para nuestro proyecto podemos seleccionar ambas.

- 5. ¿En qué formato deseas el archivo de configuración?
  - Javascript
- 6. Por último, Hace falta una dependencia para trabajar con el estándar de JavaScript, ¿quieres instalarla ahora?
  - Continúa con Y, esto va a instalar una herramienta que nos va a permitir trabajar con React.

El resultado de este proceso es un archivo llamado .eslintrc.js con todas las configuraciones

# Estructura de archivos

- **package.json:** los paquetes, scripts y la configuración principal de cualquier proyecto con Node.js.
- **gatsby-config.js:** configuramos la metadata (título, descripción y autor) y los plugins de Gatsby que usaremos para construir nuestra aplicación.

- **gatsby-browser.js:** una parte de nuestro código se construye desde el servidor, en el build time, y otra parte muy importante en el navegador, cada vez que los usuarios entran a nuestra aplicación. En este archivo podemos utilizar algunas APIs o métodos predefinidos para configurar el código que debe ejecutarse en el navegador, por ejemplo, para añadir vistas, cargar librerías o configurar un store global para manejar el estado.
  - Ejecuta cuando mi proyecto esta ya del lado del cliente por ejemplo cargar google maps. **Lo importante es que todo esto ocurre despues del render de la app**
- **gatsby-node.js**: configuramos todo lo que tiene que ver con la construcción de nuestro sitio web con Gatsby. Podemos generar vistas en función de nuestra información proveniente de GraphQL, incluso utilizando APIs externas a nuestra aplicación.
  - Aqui puede tomar info de graphql y generar vistas con esa info
- **gatsby-ssr.js:** configuramos lo que sucede en el build time para que nuestra aplicación funcione correctamente en producción. Tiene el mismo fin que gatsby-browser.js, solo que este será el código que enviamos a producción.
  El resto de archivos y carpetas contienen código JavaScript (seguramente con React) y CSS.
  # Plugins

Piezas de codigo que podemos agregar a nuestro proyecto. Los plugins pueden ayudarnos de 3 formas:

- **Plugins como Componentes:** (plugin componente) Cuando instalamos el plugin obtenemos un componente que debemos integrar a nuestra aplicación para obtener algún beneficio/ resolver alguna problematica.

  - Por ejemplo gatsby-rect-helmet

- **Plugins como Funcionalidades:** ( plugin funcional) Nos ayudan a transformar información o implementar una funcionalidad en concreto.
- Por ejemplo: gatsby-image nos ayuda a crear nuevas versiones de nuestras imágenes con menor calidad para mejorar la carga inicial de nuestro sitio web.

- **Plugins como Fuente de Datos:** (plugin fuentes de datos) Estos plugins utilizan Node.js y GraphQL para consumir la información de algún lugar o herramienta como Firebase, WordPress, APIs Rest, entre otras.
  - Por ejemplo gatsby-source-filesystem: nos ayuda a tomar lo que esta en "cierta carpeta" y ponerlo disponible en graphql

# Rutas en gatsby

<https://www.gatsbyjs.com/docs/routing/>
Gatsby nos facilita mucho la creación de páginas de nuestra aplicación. Solo debemos crear un archivo en la carpeta src/pages con el nombre de la página y automáticamente tendremos esa ruta disponible con el contenido del archivo.

Por ejemplo: Podremos ver contenido del archivo src/pages/index.js en la ruta / y el contenido del archivo src/pages/about.js en la ruta /about.

# wrapRootElement

<https://www.gatsbyjs.com/docs/browser-apis/#wrapRootElement>

Por defecto, debemos importar nuestro componente Layout desde todos los archivos de nuestras páginas, de otra forma solo veremos el contenido de la página sin los componentes que configuramos en el Layout.
​
Afortunadamente, Gatsby nos permite configurar componentes que envuelvan todas nuestras páginas al momento de hacer render en el navegador. Para esto debemos configurar la opción exports.wrapRootElement del archivo gatsby-browser.js:
​

```
// gatsby-browser.js
exports.wrapRootElement = ({ element }) => (
  <Layout>
    {element}
  </Layout>
);
```

# ¿Cómo funciona GraphQL en Gatsby?

GraphQL es un lenguaje tipado que facilita la comunicación entre servicios, pero los datos de nuestra aplicación pueden venir de diferentes lugares, así que GraphQL no tiene forma de acceder a todos estos datos para que podamos consumirlos desde un mismo lugar.

Gatsby recolecta toda la información de nuestra aplicación mientras desarrollamos en local y la almacena en un servidor de GraphQL. Luego, en la etapa de compilación, justo antes de pasar a producción, Gatsby guardará los datos de GraphQL junto al código, de esta forma los tendremos disponibles sin necesidad de hacer peticiones a las fuentes de datos originales.

Para actualizaciones se puede hacer un webhook desde el server del API que le indique al server que está hospedando Gatsby cuando hay un cambio en el primero para que haga un nuevo build.

![flujo-gatsby](./readmestatics/gatsby-graphql.png)

Al iniciar nuestro servidor de desarrollo con Gatsby también iniciamos un servidor de GraphQL que almacena todos los datos de nuestra aplicación, incluyendo los datos que obtenemos por medio de los plugins.

Si vamos a nuestro archivo Gatsby-config.js vamos a ver los plugins que mencionamos por ejemplo _gatsby-source-filesystem_ contiene todas la informacion relacionada a las imagenes de nuestro proyecto.

```
query {
  allFile {
    totalCount
  }
}
```

En general nuestro proceso sera configurar plugins de fuentes de datos tomar la informacion y asi quedara disponible para graphql.

# Queries, Edges (conexiones) y Nodos en Gatsby

- **Edges**
  <https://www.gatsbyjs.com/docs/schema-generation/>
  La propiedad edges nos hace referencia a la conexión entre estos plugins (de fuente de datos) y el servidor de GraphQL.

- **Nodos**

Son los elementos individuales de información que obtenemos al hacer una consulta con la propiedad edges.

```
query {
  allFile {
    edges {
      node {
         name
         relativePath
         absolutePath
      }
    }
  }
}
___

data": {
    "allFile": {
      "edges": [
        {
          "node": {
            "name": "cart",
            "relativePath": "cart.png",
            "absolutePath": "/home/silnose/platzi/gatsby/c-gatsby/src/images/cart.png"
          }
          (...)
```

Por tanto cuando configuramos un nuevo plugin de fuente de datos le pediremos la conexion (edges) y para pedir la informacion a cada uno de esos elementos que trajo necesitamos pedirle a edges los nodo/s
Es es la manera de acceder a la informacion de nuestras fuentes de datos.

# Consultas en GraphQL desde React

Para poder realizar estas consultas debemos importar graphql desde gatsby:

```
// src/pages/NuestroPage.js
import { graphql } from 'gatsby';
```

Exportar nuestra consulta con el nombre de query:

```
// src/pages/NuestroPage.js
export const query = graphql`
  query NUESTRA_CONSULTA {
    # ...
  }
`;
```

Y consumir la información de la propiedad data que obtenemos automáticamente en el componente de nuestra página:

```
// src/pages/NuestroPage.js
export default function NuestroPage({ data }) {
  console.log(data.allSite.edges[0].node.siteMetadata);

  return /* ... */;
}
```

OJO! solo podemos hacer estas consultas en los componentes página de nuestra aplicación (src/pages/)

# Instalación y configuración de plugins

<https://www.gatsbyjs.com/docs/plugins/#reach-skip-nav>
<https://www.gatsbyjs.com/plugins>

Plugin ejemplo: https://kyleamathews.github.io/typography.js/

Los plugins son herramientas de ayuda para el desarrollo de Gatsby no permite y facilita el entorno de trabajo… Existen diversos plugins en gatsby… son intalado por default por npm pero tambien son combatible con yarn

# Imagenes como fuentes de datos

<https://www.gatsbyjs.com/docs/working-with-images/>

# Plugins de transformación

Agregan funcionalidad a nuestro proyecto:

- gatsby-transformer-sharp:
  Se encarga de crear nuevas versiones de nuestras imágenes con diferentes tamaños, formatos (.webp, .png, entre otros) y calidad.

```
query {
	allFile{
    edges{
      node{
        id
        childImageSharp {
          id
          fluid(maxWidth: 500) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  }
}

```

- gatsby-image:
  Utiliza la información de gatsby-transformer-sharp para cargar las versiones más livianas de nuestras imágenes (utilizando el tamaño y formato que mejor se adapten al usuario) y luego cambiarlas por las versiones actualizadas de mejor calidad, todo esto con el fin de mejorar el tiempo de carga inicial de nuestra aplicación.

# styled-components

<https://styled-components.com/>
<https://www.gatsbyjs.com/docs/styled-components/#reach-skip-nav>
Styled Components es una herramienta que nos ayuda a usar lo mejor de CSS en JavaScript y React.

Para usar esta herramienta solo debes seguir los siguientes pasos:

1 - Instalar styled-components:

```
npm install --save styled-components
```

2 - Importar styled desde styled-components:

```import styled from 'styled-components';

```

3- Y ya podemos crear un componente estilizado siguiendo la sintaxis de styled components (css)(styled.etiquetaDeHTML):

```
const Button = styled.button`
  /* Estilos CSS para nuestro botón */
  color: ${props => props.color || 'black'};

`;
```

# Estilos Globales con styled-components

Al estilizar componentes con Styled Components estamos definiendo estilos únicamente de los componentes creados con styled, no al resto de nuestra aplicación
Sin embargo, Styled Components también nos permite crear estilos globales: Estilos que podemos aplicar a todas las clases o etiquetas HTML de la aplicación. Los pasos a seguir son:

1 - Importa createGlobalStyle de styled-components:

```
import { createGlobalStyle } from 'styled-components';
```

2- Crea un nuevo componente con los estilos globales de tu aplicación usando createGlobalStyle:

```
export const GlobalStyles = createGlobalStyle`
  button {
    color: green:
  }

  button.boton-color-violeta {
    color: purple;
  }
`;
```

3 - Envuelve toda tu aplicación en el componente de estilos globales (app/layout):

# Creando páginas en función de los datos

<https://www.gatsbyjs.com/docs/api-files-gatsby-node/#reach-skip-nav>
El método createPages de gatsby-node.js nos ayuda a crear páginas sin necesidad de crear un archivo por cada una de ellas en la carpeta src/pages.

```
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(...)

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`, // url slug
      component: productTemplate, // component
      context: node, // information
    })
  })
}
```

# UseStaticQuery

<https://www.gatsbyjs.com/docs/static-query/#how-to-use-staticquery-in-components>
Diferencias entre consultas a GraphQL desde páginas, con StaticQuery o useStaticQuery:

Las páginas de Gatsby (los archivos de la carpeta src/pages) nos permiten hacer consultas a GraphQL. Debemos exportar la propiedad query con el esquema de nuestra consulta y esto nos permitirá recibir los datos como props en el componente que exportamos en esa misma página.

```
export const query = graphql`
  query GET_DATA {
    # ...
  }
`

export default ({ data }) => {
  console.log(data);

  return /* ... */;
}
```

Pero esta sintaxis solo funciona en las páginas de Gatsby. Si necesitamos hacer consultas desde algún otro componente de nuestra aplicación podemos usar el componente StaticQuery.

Solo debemos escribir la consulta en la propiedad query para recibir la información desde la propiedad render:

```
<StaticQuery
  query={graqhql`
    query {
      # ...
  `}
  render={data => {
    console.log(data);
    return <AnyOtherComponent data={data} />;
  }}
/>
```

También podemos usar el hook useStaticQuery: funciona igual que StaticQuery pero nos permite usar la sintaxis de los hooks:

```
const data = useStaticQuery(
  graphql`
    query {
      # ...
    }
  `
)
```

# Context

<https://es.reactjs.org/docs/context.html>
<https://dev.to/ibrahima92/redux-vs-react-context-which-one-should-you-choose-2hhh#:~:text=However%2C%20Redux%20is%20far%20from,not%20increase%20your%20bundle%20size.>

React Context nos ayuda a crear un estado global, una forma de compartir el estado de nuestra aplicación entre todos los componentes, sin importar en qué lugar se encuentren y sin necesidad de pasar y pasar props.

Además, useContext nos permite usar todas las características de React.Context con la sintaxis de los hooks

# netlify

<https://www.netlify.com/>
Netlify es un servicio que nos permite hacer deploy de nuestras aplicaciones estáticas de forma muy sencilla y rápida. Solo debemos arrastrar la carpeta public (que Gatsby generó al momento de compilar) y cambiar la url del proyecto para que sea más fácil de recordar.

# Visual Code

Name: GraphQL
Id: graphql.vscode-graphql
Description: GraphQL extension for VSCode adds syntax highlighting, validation, and language features like go to definition, hover information and autocompletion for graphql projects. This extension also works with queries annotated with gql tag.
Version: 0.3.10
Publisher: GraphQL Foundation
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

Name: vscode-styled-components
Id: jpoissonnier.vscode-styled-components
Description: Syntax highlighting for styled-components
Version: 0.0.31
Publisher: Julien Poissonnier
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
