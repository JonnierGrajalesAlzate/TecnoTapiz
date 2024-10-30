function mostrarMensaje(material) {
    let mensaje = '';

    switch (material) {
        case 'Cuero':
            mensaje = 'El cuero es una excelente opción para muebles debido a su durabilidad, ya que puede soportar el uso diario y, con el cuidado adecuado, puede durar décadas. Es fácil de limpiar, lo que lo convierte en una opción higiénica; normalmente, solo se necesita un paño húmedo para eliminar la suciedad y el polvo. Además, el cuero ofrece una estética elegante y lujosa, disponible en una variedad de colores y texturas que permiten una amplia personalización. ';
            break;
        case 'Gamuza':
            mensaje = 'La gamuza es un material muy apreciado en la fabricación de muebles por varias razones. En primer lugar, su textura suave y lujosa proporciona un gran nivel de confort y calidez, lo que la convierte en una opción ideal para sofás, sillas y otros muebles en los que se busca una experiencia acogedora. Esta suavidad al tacto invita al uso y crea un ambiente acogedor en cualquier espacio.';
            break;
        case 'Tela':
            mensaje = 'Los sofás de tela ofrecen una serie de beneficios que los hacen una opción popular para muchos hogares. En primer lugar, son altamente cómodos, proporcionando una experiencia acogedora gracias a su suavidad, lo que resulta ideal para largas horas de relajación o entretenimiento. Además, la variedad de estilos, colores y patrones disponibles en tela permite una personalización grandiocosa.';
            break;
        default:
            mensaje = 'Selecciona un material.';
    }

    document.getElementById('modal-text').innerText = mensaje;
    document.getElementById('modal').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.name) {
      document.querySelector('.informacion h1').textContent = `Bienvenido ${storedUser.name}`;
    }
  });