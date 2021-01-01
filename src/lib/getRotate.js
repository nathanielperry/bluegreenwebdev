export default function getRotate(el) {
    const st = window.getComputedStyle(el, null);
    const tr = st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform");

    if (tr === "none") return 0;

    // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

    const values = tr.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];

    const scale = Math.sqrt(a*a + b*b);
    // arc sin, convert from radians to degrees, round
    const angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

    return angle < 0 ? 360 + angle : angle;
}
