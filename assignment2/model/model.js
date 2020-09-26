var MODEL = (function () {
  var _showAlert = function (buttonName) {
    alert("My button is " + buttonName);
  };

  var _getHome = function (callback) {
    let text = `
            <h1>HOME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut rem molestias, consectetur velit dolorem tempora commodi doloremque repellendus adipisci amet nihil exercitationem tenetur aspernatur eos reiciendis facilis. Sint, alias.          
            </p>
    
            <img src="imgs/gaming_gear.jpg" class="home_img" alt="Tools for Playing Video Games">
    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus voluptates aspernatur saepe, culpa sunt ratione ut voluptatem est aut ex cum suscipit? Possimus inventore quae corporis quisquam eveniet porro!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque, doloribus labore, ad animi provident eligendi ea impedit ipsa quia corporis autem voluptas aperiam quasi eveniet minima nisi laudantium natus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corrupti maxime. Sunt, ipsa? Ab aliquam vel, voluptates beatae minima doloribus deleniti assumenda quo voluptas esse atque optio, expedita cupiditate. Debitis.
            </p>
            
            `;
    return callback(text);
  };

  var _getProducts = function (callback) {
    let text = `
        <h1>PRODUCTS</h1>

        <div class="ps_content">
        <img src="imgs/playstation.jpg" class="ps4_controller" alt="Playstation 4 controller">
        <h2>Playstation</h2>
        <p>
        Proin laoreet lobortis blandit. Suspendisse aliquet odio vestibulum, convallis ante a, fringilla metus. Aenean viverra condimentum quam in feugiat. Vestibulum ultrices dolor quis molestie vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam commodo magna dolor. Vivamus nec lacus sit amet nulla tincidunt dictum ut aliquam eros. Donec blandit ante id turpis tristique dictum. Sed ac sollicitudin urna. Integer porta mauris ex, ac bibendum tortor luctus in.
        </p>
        </div>

        

        <br></br>
        <br></br>

        <div class="xbox_content">
        <img src="imgs/xbox.jpg" class="xbox_controller" alt="Xbox One controller">
        <h2>Xbox</h2>
        <p>
        Sed vel lacus a arcu posuere ornare ac quis lacus. Quisque in cursus ante. Nulla convallis sed tellus ac ullamcorper. Duis placerat dolor semper aliquam maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nulla lacus, pretium nec tortor pharetra, bibendum dictum est. Phasellus tincidunt viverra ipsum interdum aliquet.
        
        </p>
        </div>
        
        
    
        `;
    return callback(text);
  };

  var _getText = function (callback) {
    let text = `
                Hello!
            `;

    return callback(text);
  };

  return {
    showAlert: _showAlert,
    getText: _getText,
    getHome: _getHome,
    getProducts: _getProducts,
  };
})();
