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

  var _getAbout = function (callback) {
    let text = `
        <h1>ABOUT</h1>

        <img src="imgs/computer.jpg" class="about_img" alt="Gaming Computer">

        <div class="about_content">
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Vel turpis nunc eget lorem. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Nunc sed id semper risus in. Aenean vel elit scelerisque mauris pellentesque. Enim ut tellus elementum sagittis vitae et. Duis at consectetur lorem donec massa sapien. Eget dolor morbi non arcu risus quis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Fusce ut placerat orci nulla pellentesque. Nisi scelerisque eu ultrices vitae auctor eu. Aliquam id diam maecenas ultricies mi eget. Blandit volutpat maecenas volutpat blandit aliquam etiam. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. In nisl nisi scelerisque eu ultrices. Varius quam quisque id diam vel quam elementum.
        <br></br>
        Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Blandit libero volutpat sed cras ornare arcu dui vivamus. Eros in cursus turpis massa tincidunt dui ut ornare lectus. At risus viverra adipiscing at in tellus integer. Ornare massa eget egestas purus viverra accumsan in. Enim ut tellus elementum sagittis vitae et leo duis. Morbi tristique senectus et netus et malesuada fames. Senectus et netus et malesuada fames ac turpis egestas integer. Leo in vitae turpis massa sed. Id neque aliquam vestibulum morbi. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Amet risus nullam eget felis eget nunc lobortis. Enim sit amet venenatis urna cursus. Aliquam ut porttitor leo a diam sollicitudin tempor id. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Eu facilisis sed odio morbi quis commodo.
        <br></br>
        Est velit egestas dui id ornare arcu odio ut. Semper risus in hendrerit gravida rutrum quisque non. Leo duis ut diam quam nulla porttitor massa id neque. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Dis parturient montes nascetur ridiculus. Eget gravida cum sociis natoque. At lectus urna duis convallis convallis. Nisl nunc mi ipsum faucibus vitae. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Arcu odio ut sem nulla pharetra diam sit amet nisl.
        
        Enim sit amet venenatis urna cursus eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Sodales ut eu sem integer vitae justo eget magna. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Arcu dictum varius duis at. Sed augue lacus viverra vitae. Id interdum velit laoreet id donec ultrices. Lectus arcu bibendum at varius. Pulvinar etiam non quam lacus suspendisse. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Ut venenatis tellus in metus vulputate eu scelerisque. Diam in arcu cursus euismod quis viverra nibh cras.
        
        Aliquam etiam erat velit scelerisque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. A lacus vestibulum sed arcu non odio euismod lacinia. Dignissim cras tincidunt lobortis feugiat vivamus at. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ut etiam sit amet nisl purus in mollis. At elementum eu facilisis sed odio morbi quis. Sit amet est placerat in egestas. Viverra adipiscing at in tellus integer feugiat.
        </p>

        
        </div>
    `;
      return callback(text)
  }

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

  var _getContact = function(callback) {
      let text = `
      <h1>CONTACT</h1>
      <div class="contact_content">
      <p>
      If you have ny questions or suggestions for us or any of our products you can either leave us your email or phone
      number. One of our members will contact within the next two to three business days.

      <br></br>


      <b>Email Address: </b><input type="email" class="email" name="email">
      <br></br>
      <b>OR</b>
      <br></br>

      <b>Phone Number: </b><input type="tel" class="phone_number" name=phone number">
      
      <br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis. Etiam sit amet nisl purus in mollis nunc sed id. Vestibulum lectus mauris ultrices eros in. Porta nibh venenatis cras sed felis. Sit amet tellus cras adipiscing. Duis convallis convallis tellus id interdum velit laoreet id. At varius vel pharetra vel turpis nunc eget. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Nisl purus in mollis nunc sed id semper risus. Varius vel pharetra vel turpis nunc. Urna porttitor rhoncus dolor purus. Erat nam at lectus urna duis convallis. Amet purus gravida quis blandit turpis cursus.

Leo vel orci porta non. Nisi est sit amet facilisis magna etiam tempor. Nisi porta lorem mollis aliquam ut. Tellus elementum sagittis vitae et leo duis ut diam. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Dictum non consectetur a erat nam at lectus. Donec ultrices tincidunt arcu non sodales neque. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Et magnis dis parturient montes nascetur ridiculus mus. Lectus nulla at volutpat diam ut venenatis.
      </p>
      
      </div>
      
      <img src="imgs/laptop.jpg" class="laptop_img" alt="Laptop">

      <img src="imgs/phone.jpg" class="phone_img" alt="phone">
      
      
      
      `;
      return callback(text);
  }

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
    getAbout: _getAbout,
    getProducts: _getProducts,
    getContact: _getContact,
  };
})();
