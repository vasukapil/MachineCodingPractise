const { useState } = require("react")

export const useCopy = () => 
{
    const copy = async(text) => {
        if(!navigator?.clipboard)
        {
            console.warn("Can't copy");
            return;
        }

        try {

            await navigator?.clipboard.writeText(text);
        }
        catch(e) {
            console.log('clipboard error: ' + e.message);
        }
    }
   return copy;

}