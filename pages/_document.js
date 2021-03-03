import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = _ => 
                originalRenderPage({
                    enhanceApp: App => props => 
                    sheet.collectStyles(
                        <>
                            <GlobalStyle />
                            <App {...props} />
                        </>
                    ),
                    enhanceComponent: Component => Component,
                })

                const initialProps = await Document.getInitialProps(ctx)

                return {
                    ...initialProps,
                    styles: (
                        <>
                            {initialProps.styles}
                            {sheet.getStyleElement()}
                        </>
                    )
                }

        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang='es' >
                <Head />
                <head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                </head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument