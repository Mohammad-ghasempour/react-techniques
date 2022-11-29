import React , {useEffect , useState} from 'react';


const JustForPractice = () => {


    const [state, setState] = useState(false);
    console.log('body')
    
    useEffect(() => {
        console.log('useEffect Body');
        return () => {
            console.log('useEffect Return');
        };
    },[state]);

    return (
        <div>
            Just For Practice
           <button onClick={()=> setState(!state)}>Click</button>
            {console.log('jsx')}
        </div>
    );
}

export default JustForPractice;

