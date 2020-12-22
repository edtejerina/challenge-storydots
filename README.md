<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Fullstack_challenge_StoryDots_0"></a>Fullstack challenge (StoryDots)</h1>
<h1 class="code-line" data-line-start=2 data-line-end=3 ><a id="BACKEND_2"></a>BACKEND</h1>
<h3 class="code-line" data-line-start=3 data-line-end=4 ><a id="Dependencias_3"></a>Dependencias</h3>
<pre><code>-express
-cors
</code></pre>
<h3 class="code-line" data-line-start=6 data-line-end=7 ><a id="Iniciar_proyecto_6"></a>Iniciar proyecto</h3>
<pre><code>&gt; npm install
&gt; npm start
</code></pre>
<h3 class="code-line" data-line-start=9 data-line-end=10 ><a id="indexjs_9"></a>index.js</h3>
<p class="has-line-data" data-line-start="10" data-line-end="11">En el index.js se establecen las rutas de la API y del frontend de react, el puerto y se inicia el servidor por el mismo.</p>
<h3 class="code-line" data-line-start=11 data-line-end=12 ><a id="routesweatherjs_11"></a>routes/weather.js</h3>
<p class="has-line-data" data-line-start="12" data-line-end="16">Contiene las rutas de la API, responde a solicitudes GET con los siguientes formatos de ruta:<br>
/api/weather Envia todos los datos de clima<br>
/api/weather/1 Envia los datos de clima con el id 1<br>
/api/weather/?name=La+Plata Filtra por nombre de ciudad</p>
<h3 class="code-line" data-line-start=17 data-line-end=18 ><a id="Datos_del_clima_17"></a>Datos del clima</h3>
<p class="has-line-data" data-line-start="18" data-line-end="51">Se uso un archivo JSON para simular una base de datos y obtener los datos para luego consumirlos por medio de la API. El formato del JSON es el siguiente:<br>
<code>[ { &quot;id&quot;: 1, &quot;name&quot;: &quot;La Plata&quot;, &quot;coord&quot;: { &quot;lon&quot;: -57.9544, &quot;lat&quot;: -34.9214 }, &quot;main&quot;: { &quot;temp_min&quot;: 20, &quot;temp_max&quot;: 32, &quot;pressure&quot;: 1015, &quot;humidity&quot;: 30 } }, { &quot;id&quot;: 2, &quot;name&quot;: &quot;Olavarria&quot;, &quot;coord&quot;: { &quot;lon&quot;: -60.3225400, &quot;lat&quot;: -36.8927200 }, &quot;main&quot;: { &quot;temp_min&quot;: 10, &quot;temp_max&quot;: 22, &quot;pressure&quot;: 1035, &quot;humidity&quot;: 60 } } ]</code></p>
<h3 class="code-line" data-line-start=51 data-line-end=52 ><a id="Habilitando_CORS_51"></a>Habilitando CORS</h3>
<pre><code>app.use(cors());
</code></pre>
<h1 class="code-line" data-line-start=54 data-line-end=55 ><a id="Frontend_54"></a>Frontend</h1>
<h3 class="code-line" data-line-start=55 data-line-end=56 ><a id="Dependencias_sin_tener_en_cuentas_las_de_react_55"></a>Dependencias (sin tener en cuentas las de react)</h3>
<pre><code>-google-map-react (mapa)
-Materialize (estilos)
</code></pre>
<h3 class="code-line" data-line-start=58 data-line-end=59 ><a id="Componentes_58"></a>Componentes</h3>
<pre><code>-Error: se encarga de mostrar mensajes de errores.
-Form: recibe la ciudad que se quiere obtener información.
-Header: muestra el logo.
-MapView: recibe datos de la ciudad, obtiene las coordenadas y las muestra el mapa.
-Weather: recibe datos de la ciudad y muestra la información del clima de la misma.
</code></pre>
<h3 class="code-line" data-line-start=64 data-line-end=65 ><a id="Detalles_64"></a>Detalles</h3>
<p class="has-line-data" data-line-start="65" data-line-end="66">Se cargaron solo dos ciudades: La Plata y Olavarria</p>
<h3 class="code-line" data-line-start=66 data-line-end=67 ><a id="Proyecto_funcionando_66"></a>Proyecto funcionando</h3>
<p class="has-line-data" data-line-start="68" data-line-end="69"><a href="https://obscure-springs-04212.herokuapp.com/">https://obscure-springs-04212.herokuapp.com/</a></p>
