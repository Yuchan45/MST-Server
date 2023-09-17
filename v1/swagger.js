// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'USCIS API Documentation',
            description: 'ALIL Software development team API documentation',
            version: '1.0.0'
        },
        servers: [
            {
                "url": "http://localhost:8000/",
                "description": "Local server"
            },
            {
                "url": "https://uscisforms-server-dev.azurewebsites.net/",
                "description": "Development server"
            },
            {
                "url": "https://uscisforms-server.azurewebsites.net/",
                "description": "Production server"
            }
        ]
    },
    // aca van las rutas/endpoints a documentar. Se ponen los routes, y pueden ser varios. Por eso es un array. Aunque en este caso use el '*'.
    apis: ["./routes/routesDocs/*"]
}

// Configuración de Swagger UI
const swaggerUiOptions = {
    explorer: false,
    swaggerOptions: {
        url: `https://uscisforms-server.azurewebsites.net/swagger.json`,
    }
};

const swaggerDocs = (app, port) => {
    // Set up Swagger Middleware. Sets the route/endpoint where i want the documentation.
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec), swaggerUiOptions));
    app.get("/api-docs", (req, res) => {
        res.setHeader("Content-type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `📖 Version 1 Docs are available at http://localhost:${port}/api-docs`
    );
}

module.exports = { swaggerDocs }
