import React from 'react';
import '../assets/styles/style.css';

import Img1 from "../assets/imagens/img1.png";
import Img2 from "../assets/imagens/img1.png";
import Img3 from "../assets/imagens/img1.png";
import Img4 from "../assets/imagens/img1.png";
import Google from "../assets/imagens/logoGoogle.svg";

// Validação do padrão de email digitado
const validacaoEmail = () => {
    const campoEmail = document.getElementById('usuario')
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(campoEmail.value);

    if(!emailTest) {
        document.getElementById('emailInvalido').style.display = "block";   
    } else{
        return true
    }
}

// Validação de email e senha digitados e válidos
const  validacao = () => {
    var emailDigitado = document.getElementById('usuario').value;
    var senhaDigitada = document.getElementById('senha').value;
    var campoObrigatorio1 = document.getElementById('campoObrigatorio1');
    var campoObrigatorio2 = document.getElementById('campoObrigatorio2');
    var campoObrigatorio3 = document.getElementById('campoObrigatorio3');
    var qntdSenha = senhaDigitada.split('')
    
    if(emailDigitado !== ""){
       if ( validacaoEmail() === true){
            if(senhaDigitada !== ""){
                if (qntdSenha.length > 5 ){
                    alert("Você está logado!")
                }else{
                    campoObrigatorio3.style.display = 'block' 
                }
            } else{
                campoObrigatorio2.style.display = 'block'
            }   
        }  
    } else{
        campoObrigatorio1.style.display = 'block'
    }
}

// Funções de reset das mensagens de erro do imput
const limparErroEmail = () => {
    document.getElementById('campoObrigatorio1').style.display = "none"
    document.getElementById('emailInvalido').style.display = "none";
}

const limparErroSenha = () => {
    document.getElementById('campoObrigatorio2').style.display = 'none'
    document.getElementById('campoObrigatorio3').style.display = 'none'
}

function Login() {
    return (
      <div className="container">
            {/* Área do slide show */}
            <div className= "ladoEsquerdo">
                <div className="slideShow middle">
                    <div className="slides">
                        <input type="radio" name="s" id="s1"></input>
                        <input type="radio" name="s" id="s2"></input>
                        <input type="radio" name="s" id="s3"></input>
                        <input type="radio" name="s" id="s4"></input>
                        <div className= "slide s1">
                            <img src={Img1} alt=""></img>
                            <div className= "titulo">
                                Marcenas mattis egestas
                            </div>
                            <div className= "texto">
                                Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
                            </div>
                        </div>
                        <div className= "slide">
                            <img src={Img2} alt=""></img>
                            <div className= "titulo">
                                Marcenas mattis egestas
                            </div>
                            <div className= "texto">
                                Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
                            </div>                  
                        </div>
                        <div className= "slide">
                            <img src={Img3} alt=""></img>
                            <div className= "titulo">
                                Marcenas mattis egestas
                            </div>
                            <div className= "texto">
                                Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
                            </div>
                        </div>
                        <div className= "slide">
                            <img src={Img4} alt=""></img>
                            <div className= "titulo">
                                Marcenas mattis egestas
                            </div>
                            <div className= "texto">
                                Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
                            </div>
                        </div>
                    </div>

                    {/* Navengação automática do slide show */}
                    <div className="slideAuto">
                        <div className= "auto1"></div>
                        <div className= "auto2"></div>
                        <div className= "auto3"></div>
                        <div className= "auto4"></div>
                    </div>

                    {/* Navengação manual do slide show */}
                    <div className="navigation">
                        <label for="s1" className="bar" id="bar1"></label>
                        <label for="s2" className="bar"></label>
                        <label for="s3" className="bar"></label>
                        <label for="s4" className="bar"></label>
                    </div>
                </div>
            </div>

            {/* Área de login */}
            <div className= "ladoDireito">
                <div className= "invision">
                    Invision
                </div>
                <div className= "bemVindo">
                    Welcome to Invision
                </div>

                {/* Campo dos imputs de login */}
                <div className= "areaLogin">
                    <form>
                        <div>
                            User name or email
                            <input onInput={() => {limparErroEmail()}} type="text" id="usuario" autocomplete="off"></input>
                            <div id="campoObrigatorio1">Este campo não pode ser vazio</div>
                            <div id="emailInvalido">O e-mail está incorreto.</div>
                        </div>
                        <div>
                            Password
                            <input onInput={() => {limparErroSenha()}} id="senha" type="password"></input>
                            <div id="campoObrigatorio2">Este campo não pode ser vazio</div>
                            <div id="campoObrigatorio3">A senha não pode ter menos de 6 caracteres</div>
                        </div>
                        <a href="#" className="forgot">Forgot password?</a>
                        <div className="areaButton">
                            <button onClick={() => {validacao()}}>Sign in</button>
                        </div>
                    </form>
                </div>
                <div className= "or">
                    <span>Or</span>
                </div>
                <div className= "btnGoogle">
                    <button>
                        <img src= {Google} alt="Logo da Google"></img>
                        <div>Sign in with Google</div>
                    </button>
                </div>
                <div className= "createAccount">
                        <div>New</div>
                        <div className="invisionP">Invision</div>
                        <div>?</div>
                    <a href="#">Create Account</a>
                </div>
            </div>
      </div>
    );
}
export default Login;