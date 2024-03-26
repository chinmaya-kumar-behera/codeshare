import React from 'react'
import { createCodeService, getCodeService } from '../services/urlService';

const URLHandler = () => {

    const getCodeHandler = (id) => {
        return getCodeService(id);
    }

    const createCodeHandler = (data) => {
      return createCodeService(data);
    };
  return { getCodeHandler, createCodeHandler };
}

export default URLHandler