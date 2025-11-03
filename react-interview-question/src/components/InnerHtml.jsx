import React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function InnerHtml() {


    const innerHtml = `<p style="font-size: 20px; color: red;">This text is populated using innerHTML</p>`

    return (
    <div>
        <div dangerouslySetInnerHTML={{__html: innerHtml}}></div>

    </div>
  )
}

export default InnerHtml
