import React from 'react'
import { createCodeService, getCodeService } from '../services/urlService';

const URLHandler = () => {

  const getCodeHandler = (id) => {
    try {  
      return getCodeService(id);
    }
    catch (err) {
      console.log(err);
    }
    }

    const createCodeHandler = (data) => {
      return createCodeService(data);
    };
  return { getCodeHandler, createCodeHandler };
}

export default URLHandler