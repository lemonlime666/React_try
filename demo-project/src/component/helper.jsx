let onChange = null;

export default class Helper{
    static setListener = (handler) => {
        onChange = handler
    }
    static count = (tags) => {
        onChange(tags)
    }

}