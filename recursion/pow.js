function pow(b, e){
    if(e == 1) return b;
    else return b*pow(b, e-1);
}
