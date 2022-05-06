import '../css/rater.css';

function Rater(props) {
         let items=[];
        for(var i=1;i<props.maxlength;i++)
        {
          items.push( 
          <li key={i} className={i<=props.rating?'fa fa-star checked':''}>{'\u2605'}</li>
          );
        }

        return(
            <ul className='rating'>
            {items}
            <li><span >{props.rating}/5</span></li>
            </ul>
            
        );
        // <ul className="rating">
        //     <li className="fa fa-star checked">{'\u2605'}</li>
        //     <li className="fa fa-star checked">{'\u2605'}</li>
        //     <li className="fa fa-star checked">{'\u2605'}</li>
        //     <li>{'\u2605'}</li>
        //     <li>{'\u2605'}</li>
        //     <li><span >{props.rating}/5</span></li>
        // </ul>
        
    
}
export default Rater;
