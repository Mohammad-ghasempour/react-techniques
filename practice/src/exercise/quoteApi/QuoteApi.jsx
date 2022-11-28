import React , {useEffect , useState} from 'react';
import QuoteDisplay from './QuoteDisplay';
import QuoteLength from './QuoteLength';
import Tags from './Tags';


const QuoteApi = () => {

    const [quote, setQuote] = useState({});
    const [tag, setTag] = useState("");
    const [maxLength, setMaxLength] = useState(150);
    const [getNewQuote , setGetNewQuote] = useState(0);
    const baseUrl="https://api.quotable.io/random";
    const maxLengthQuery="&maxLength=" + maxLength
    const url = `${baseUrl}?tags=${tag}${maxLengthQuery}`;
    

    const changeLength=(e)=>{
        setMaxLength(e)
    }
    const newQuote=()=>{
        setGetNewQuote(getNewQuote +1);
    }
    const selectTag=(e)=>{
        setTag(e.target.id)
        
        newQuote()
    }

    useEffect(()=> {
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> setQuote(data))
         },[getNewQuote]);

    return (
        <div>
         <h1>Quotes...</h1>
         <Tags selectTag={selectTag}/>
         <QuoteLength changeLength={changeLength}/>
         <QuoteDisplay key={getNewQuote} content={quote.content} author={quote.author} newQuote={newQuote}/>
        </div>
    );
}

export default QuoteApi;
