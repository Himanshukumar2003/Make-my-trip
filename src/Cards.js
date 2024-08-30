// const Card = () => {
//     const cardRef = useRef(null);
  
//     const handleClick = (e) => {
//       if (cardRef.current && !cardRef.current.contains(e.target)) {
//         onClose();
//       }
//     };
  
//     useEffect(() => {
//       window.addEventListener("click", handleClick);
//       return () => {
//         window.removeEventListener("click", handleClick);
//       };
//     }, []);
  
//     const cardStyles = {
//       // ...
//     };
  
//     return (
//       <>
//         <div style={overlayStyles} />
//         <div style={showCard ? cardStyles : { display: "none" }} ref={cardRef}>
//           {children}
//           <button>Close</button>
//         </div>
//       </>
//     );
//   };

//   export default Card