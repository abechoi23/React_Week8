function covfefe(s) {
    if (s.includes("coverage")) {
        return s.replace(/coverage/g, "covfefe")
    } else {
        return (s + " covfefe").trimStart()
    }
}