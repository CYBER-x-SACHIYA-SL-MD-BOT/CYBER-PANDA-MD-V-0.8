const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Panda~H4sIAAAAAAAAA5VUXZOiOBT9L3nVGhFQPqq6amhUEKQFFVG35iFCwLR8mQQEp/zvW9jT3fOwO9v7Fm6oc88959z8BHmBKbJRC9SfoCS4hgx1R9aWCKjguYpjREAfRJBBoIJg4VBLWeBroogHpUQ9azeVBvzrUGiXJyfx9V0Uy7mpW2f/Cdz7oKyOKQ7/AHhb33q5lTVXR7pRsuLtqyXM9w5XVmi4mN0Cyx7vk3kxiHPnCdw7RIgJzpNpeUIZIjC1UetCTL5GH00s0/OuaTw7S0N2qRtirOMBiU+CdtmOxeWw5jbzrXATOPlr9JeVa529bLrmdy/83tq28JDRMObHgUeWO3NEU3s9SW0923Jv9ClOchTNI5QzzNov6y5bxs13X+pX6rLGqRUlTzbcZmk/r/RSxPJGSQzPCIJhy3NfI14H9my2dwZheHLkVsocLzZtL6GXqow407ePVioZN3Prcc7vxF3ynpXz/9F9PV/zp8USC5eibc50QWcimaw2Y8NGTdw2ZEIcl82dUubPX6MfXAtflFJJ8ngn0fbpQcJUSCcbi9lcwi+PFqXuANYjMfU+6UNWkT+xnD2HgrY8kGOiTMzlJt8jls+To89v4MK1qsjmQ0HzzyuTYC+/XGwnqDVfMtwoHmRL4cU/9tajyvP8yEhWV2MAqTRvcfL0mOiM2nkE1OG9DwhKMGUEMlzkXY1X+gBG9RqFBLGHuoDjXoRKH18GqG2lFs228nS3C3oJdfVLsw/mV2N0OmhbwY2dJ9AHJSlCRCmKTExZQVoHUQoTRIH6148+yFHD3nzrugnDPogxoczPqzItYPRu6vslDMOiytm6zUO9OyACVO6zjBjDeUI7GasckvCEa6SfIKNAjWFK0ceAiKAIqIxU6GNp9SLqdN9PbVvWBRv0QfbwA0dABYoojTme57gRr0rf6bdrBwrL8luOGOiD9PGTOORlmedkUZFlRVal7135/sGuA4sQgzilQAX6wjwU4dWYLpb6qyMbhuYlmp5o4HOa91S8yX4ajA49dj6uamF3eKXsQKjdRFdkhEU4d0Ukxw2pLiNtkHhP/wACVBApVhqQ4Uhoem6plbd4jcwt53O+eNwltMrMaLAKZrGy8KZrrxzequtwYPHnccKXjQanurTO51rvMC2ZNk0D3Hpny9C7CPVBhGocot+bZbOeT8ZXON3NuMz3uCOZZJX43IyKRTlW4khbFIf2snftZn/Z8OPJxY3t5moJr2bNbw81b0yMiJ2Oyro9L1aKt38Z0hZrb3l97Ev6653Cjyh1PnWfMUaPtc9h595/+fZGuwsXd+//hvDrGfmXVXzex70gJgeDOypDfi8tAijpdBeap9w29UnPrE0ZSpfKc8UpuN9/9EGZQhYXJAMqgHlEChyBPiBF1aV1nsfFH5rp2nmuXZNFN3cKKdM+N2CDM0QZzEqgDiVpLMrieDy6/w2lmnwPNgcAAA==",
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "CYBER-PANDA-MD-V.10",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "+94702782946",
    OWNER_NAME:            process.env.OWNER_NAME || "CYBER-PANDA-MD-V.10",
    DESCRIPTION:           process.env.DESCRIPTION || "CYBER-PANDA-MD-V.10",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Cyber Panda MD Is Active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Panda Md",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    AUTO_FOLLOW_NEWSLETTER:  true,
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
};
