export interface RestProductsResponse {
    status:       number;
    msg:          string;
    data:         Product[];
    previousLink: null;
    nextLink:     string;
    currentPage:  number;
}

export interface Product {
    id:          number;
    ItemCode:    string;
    ItemName:    string;
    ItmsGrpCod:  number;
    ItmsGrpNam:  string;
    ItmsGrpDesc: string;
    Color:       string
    ColorDesc:   string;
    ColorHex:    string;
    Talla:       string;
    Stock:       number;
}