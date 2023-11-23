import React from 'react';
import PropTypes from 'prop-types';
import './ChatBot.css';

const ChatBot = () => (

    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
            window.voiceflow.chat.load({
                verify: { projectID: '655ae576c6f2232e582dccc2' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
            });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script')
   
);

ChatBot.propTypes = {};

ChatBot.defaultProps = {};

export default ChatBot;
