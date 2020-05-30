export const loadState = () => {
    try {
        const sState = localStorage.getItem('state');
        if (sState === null){
            return undefined;
        }
        return JSON.parse(sState);
    }catch (err){
        return undefined;
    }
};

export const saveState = (state) => {
    try{
        const sState = JSON.stringify(state);
        localStorage.setItem('state', sState);
    }catch(err){
        
    }
}