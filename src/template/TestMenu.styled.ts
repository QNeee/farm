import styled from 'styled-components';

export const Burger = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;

  /* position: fixed;
  right: 0;
  top: 0; */

  outline: 1px solid #ccc;

  z-index: 2;

  font-size: 32px;

  padding: 16px;
  /* padding: 16px 16px 32px 32px; */

  border-radius: 0% 0% 100% 100%;
  /* border-radius: 0% 0% 0% 100%; */

  /* backdrop-filter: blur(0px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 35px 68px 0px rgba(145, 192, 255, 0.5),
    inset 0px -12px 16px 0px rgba(145, 192, 255, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255); */

  transition: 1s;
  cursor: pointer;

  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 68px 0px rgba(145, 192, 255, 0.5),
    inset 0px -9px 16px 0px rgba(145, 192, 255, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  &:hover {
    border: 1px solid darkblue;
    border-top: 0;
  }
`;

export const Quit = styled.div`
  position: fixed;
  top: 0;
  font-size: 24px;
  padding: 10px;
  display: none;
  cursor: pointer;
  z-index: 10;
`;

export const Links = styled.div`
  position: fixed;
  display: none;
  /* flex-direction: column; */
  z-index: 3;
  width: 100vw;
  height: 50vh;
  padding: 25vh 0;
  justify-content: space-around;
`;

export const A = styled.a`
  text-align: center;
  /* text-decoration: none;
  color: white;
  font-size: 2em;
  z-index: 10; */
`;

/* @keyframes checked-anim {
  50% {
    width: 300px;
    height: 300px;
  }

  100% {
    width: 350px;
    height: 350px;
    border-radius: 0;
  }
}

@keyframes not-checked-anim {
  0% {
    width: 300px;
    height: 300px;
  }
}

li,
a {
  margin: 75px 0 -55px 0;
  color: #03A9F4;
  font: 14pt "Roboto", sans-serif;
  font-weight: 700;
  line-height: 1.8;
  text-decoration: none;
  text-transform: none;
  list-style: none;
  outline: 0;
  display: none;
}

li {
  width: 230px;
  text-indent: 56px;
}

a:focus {
  display: block;
  color: #333;
  background-color: #eee;
  transition: all .5s;
}

.aside {
  position: absolute;
  color: white;
  top: 35%;
  right: 10%;
  text-align: right;
}

h1 {
  line-height: 0;
  font-size: 4vw;
  font-weight: 700;
}

h3 {
  float: right;
  line-height: .3;
  font-size: 2.5vw;
  font-weight: lighter;
}

h4 {
  float: left;
  margin-left: -2%;
  font-size: 1.5vw;
  font-weight: lighter;
}


.trigger,
.burger,
.burger:before,
.burger:after {
  position: absolute;
  top: 25px;
  left: 25px;
  background: #03A9F4;
  width: 30px;
  height: 5px;
  transition: .2s ease;
  cursor: pointer;
  z-index: 1;
}

.trigger {
  height: 25px;
  background: none;
}

.burger:before {
  content: " ";
  top: 10px;
  left: 0;
}

.burger:after {
  content: " ";
  top: 20px;
  left: 0;
}

.menuToggle:checked+.trigger+.burger {
  top: 35px;
  transform: rotate(180deg);
  transition: transform .2s ease;
}

.menuToggle:checked+.trigger+.burger:before {
  width: 20px;
  top: -2px;
  left: 18px;
  transform: rotate(45deg) translateX(-5px);
  transition: transform .2s ease;
}

.menuToggle:checked+.trigger+.burger:after {
  width: 20px;
  top: 2px;
  left: 18px;
  transform: rotate(-45deg) translateX(-5px);
  transition: transform .2s ease;
}

.menu {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 110px;
  height: 110px;
  background-color: #fff;
  border-bottom-right-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  animation: not-checked-anim .2s both;
  transition: .2s;
}

.menuToggle:checked+.trigger+.burger+.menu {
  width: 20px;
  height: 100px;
  animation: checked-anim 1s ease both;
  margin: 20px;
}

.menuToggle:checked+.trigger~.menu>li,
a {
  display: block;
}

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  display: none;
} */
