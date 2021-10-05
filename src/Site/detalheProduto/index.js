import Cookie from 'js-cookie'
import {Link, useHistory} from 'react-router-dom'
import {Container} from './styled'

function Index(props) {
    const navigation = useHistory();

    const produto = props.location .state;


    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho 
    } 
}

export default Index;