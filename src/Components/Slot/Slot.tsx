import React from "react";
import styled, { keyframes } from "styled-components";
import ImageSlot from "../Image/ImageSlot";
import { useSelector } from "react-redux";
import { getLineRender, getSlot, getVersion } from "../../Redux/chatSlice";

const Container = styled.div<{ version?: string | null }>`
  display: grid;
  grid-template-columns:${props => props.version ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)'};
  grid-gap: 0;
  background: linear-gradient(45deg, white, lightblue);
  position: relative;
  overflow: hidden;
`;

// const Wrap = styled.div`
//  margin: 0;

// `;


const SlotAnimationNew = keyframes`
  0% {
    transform: rotateY(0deg);
    filter: blur(0);
  }
  100% {
    transform: rotateY(2000deg);
    filter: blur(80px);
  }
`;

const SlotAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;



const SlotAnimationOld = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
  } 
`;


const AnimatedContainer = styled.div<{ animate: boolean, id: string }>`
  position: relative;
  border: 2px solid green;
  
  border-radius: ${({ animate }) => (animate ? '50%' : 'none')};
   animation-name:${({ animate, id }) => {
    if (animate) {
      switch (id) {
        case '64a5be6f083fae19e09b4871':
          return SlotAnimation;
        case '64a744f7083fae19e09b4874':
          return SlotAnimationNew;
        case '64a744fd083fae19e09b4875':
          return SlotAnimationOld;
        default:
          return 'none';
      }
    }
  }};
   animation-duration:${({ animate, id }) => {
    if (animate) {
      switch (id) {
        case '64a5be6f083fae19e09b4871':
          return '0.4s'
        case '64a744f7083fae19e09b4874':
          return '4.3s'
        case '64a744fd083fae19e09b4875':
          return '0.7s'
        default:
          return 'none';
      }
    }
  }};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
`;

const LineAnimation = keyframes`
   0% {filter: blur(0);
  background-color: blue;}
  10% {filter: blur(0);
  background-color: brown;}
  30% {filter: blur(6px);
    background-color: green;}
  60% {filter: blur(6px);
  background-color: brown;}
  80% {filter: blur(0);
  background-color: green;
  }
`;


const Line = styled.div<{ line: boolean | string | number }>`
  position: absolute;
  left:${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '50%';
      case 'string':
        return '0';
      case 'number':
        return '45%';
      default:
        break;
    }
  }};
   width:${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '12px';
      case 'string':
        return '100%';
      case 'number':
        return '12px';
      default:
        break;
    }
  }};
   height:${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '100%';
      case 'string':
        return '12px';
      case 'number':
        return '100%';
      default:
        break;
    }
  }};
    background-color:'blue';
      transform:${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return 'translate(-50%, -50%)';
      case 'string':
        return 'none';
      case 'number':
        return 'rotate(-45deg)';
      default:
        break;
    }
  }};
      top:${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '50%';
      case 'string':
        return '45%';
      case 'number':
        return '0';
      default:
        break;
    }
  }};
  animation: ${LineAnimation} 2s linear infinite;
`;

interface IProps {
  animate: boolean;
  lines: number;
  start: boolean;
  id: string;
}

interface IImg {
  id: string;
  img: string;
  value: number;
  line?: boolean | string;
  ConfettiContainer: boolean;
  version?: string
}

export const Slots: React.FC<IProps> = ({ animate, id }) => {
  const lineRender = useSelector(getLineRender);
  const data: IImg[] = useSelector(getSlot);
  const version = useSelector(getVersion);
  return (
    <Container version={version}>
      {data.length > 0 &&
        data.map((item, index) => (
          <AnimatedContainer key={index} animate={animate} id={id}>
            {lineRender && item.line && typeof item.line === 'boolean' && (
              <>
                <Line line={true} />
              </>
            )}
            {lineRender && item.line && typeof item.line === 'string' && (
              <>
                <Line line={'true'} />
              </>
            )}
            {lineRender && item.line && typeof item.line === 'number' && (item.line === 1 || item.line === 2) && (
              <>
                <Line line={1} />
              </>
            )}
            {/* {item.line && <Confetti />} */}

            <ImageSlot src={item.img} alt={`item ${index}`} />
          </AnimatedContainer>
        ))}
    </Container>
  );
};








// import React from "react";
// import styled, { keyframes } from "styled-components";
// import ImageSlot from "../Image/ImageSlot";
// import { useSelector } from "react-redux";
// import { getSlot } from "../../Redux/chatSlice";

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   grid-gap: 0;
//   background: linear-gradient(45deg, white, lightblue);
//   position: relative;
//   overflow: hidden;
// `;


// const SlotAnimationNew = keyframes`
//   0% {
//     transform: rotateY(0deg);
//     filter: blur(0);
//   }
//   100% {
//     transform: rotateY(2000deg);
//     filter: blur(80px);
//   }
// `;

// const SlotAnimationOld = keyframes`
//   0% {
//     transform: translateY(-100%);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

// const AnimatedContainer = styled.div<{ animate: boolean, id: string }>`
//   position: relative;
//   border: 2px solid green;
//   animation-name: ${({ animate, id }) => (animate && id === '64a5be6f083fae19e09b4871' ? SlotAnimationOld : animate && id !== '64a5be6f083fae19e09b4871' ? SlotAnimationNew : 'none')};
//   animation-duration:${({ animate, id }) => animate && id === '64a5be6f083fae19e09b4871' ? '0.5s' : '4300ms'};
//   animation-timing-function: linear;
//   animation-fill-mode: forwards;
//   animation-iteration-count: 1;
//   overflow: hidden;
// `;


// const Line = styled.div<{ line: boolean | string }>`
//   position: absolute;
//   left: ${({ line }) => (typeof line === 'boolean' ? '50%' : '0')};
//   width: ${({ line }) => (typeof line === 'boolean' ? '12px' : '100%')};
//   height: ${({ line }) => (typeof line === 'boolean' ? '100%' : '12px')};
//   background-color: blue;
//   transform: ${({ line }) => (typeof line === 'boolean' ? 'translate(-50%, -50%)' : 'none')};
//   top: ${({ line }) => (typeof line === 'boolean' ? '50%' : '50px')};
// `;
// interface IProps {
//   animate: boolean;
//   lines: number;
//   start: boolean;
//   id: string;
// }

// interface IImg {
//   id: string;
//   img: string;
//   value: number;
//   line?: boolean | string;
// }

// export const Slots: React.FC<IProps> = ({ animate, id }) => {
//   const data: IImg[] = useSelector(getSlot);

//   return (
//     <Container>
//       {data.length > 0 &&
//         data.map((item, index) => (
//           <AnimatedContainer key={index} animate={animate} id={id}>
//             {item.line && typeof item.line === 'boolean' && <Line line={true} />}
//             {item.line && typeof item.line === 'string' && <Line line={'true'} />}
//             <ImageSlot src={item.img} alt={`item ${index}`} />
//           </AnimatedContainer>
//         ))}
//     </Container>
//   );
// };
