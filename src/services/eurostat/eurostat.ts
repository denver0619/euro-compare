export class Eurostat {
    private dataset: any;
    private defaults: any | null;
    constructor(dataset: any) {
        this.dataset = dataset;
    }
    getIndexList() {
        return this.dataset.__tree__.id;
    }

    getDimensionIndices(dimension: string) {
        return this.dataset.__tree__.dimension[`${dimension}`].category.index;
    }
    getDimensionLabels(dimension: string) {
        return this.dataset.__tree__.dimension[`${dimension}`].category.label;
    }

    getDimensionKeyByLabel(dimension: string, name: string) {
        const currentDimension =
            this.dataset.__tree__.dimension[`${dimension}`].category.label;
        return Object.keys(currentDimension).find(
            (key) => currentDimension[key] === name
        );
    }

    getIndexByKey(dimension: string, key: any) {
        return this.dataset.__tree__.dimension[`${dimension}`].category.index[
            `${key}`
        ];
    }

    getValue(datasetQuery: any) {
        let index: any;
        for (let key in datasetQuery) {
            index += this.getIndexByKey(key, datasetQuery[key]);
        }
        return this.dataset.__tree__.value[index];
    }
}

// let freqIndex: any = data.dimension.freq.category.index;
// let naItemIndex: any = data.dimension.na_item.category.index;
// let pppCatIndex: any = data.dimension.ppp_cat.category.index;
// let geoIndex: any = data.dimension.geo.category.index;
// let timeIndex: any = data.dimension.time.category.index;
// let label: any = data.dimension.time.category.label;
// let value: any = data.value;

// let germanyIndex = geoIndex["DE"];

// Object.keys(timeIndex).forEach((timeKey) => {
//     let timeValue = timeIndex[timeKey];
//     let timeLabel = label[timeKey];
//     let germanyDataKey = `${freqIndex.A}${naItemIndex.PPP_EU28}${pppCatIndex.GDP}${germanyIndex}${timeValue}`;
//     let germanyData = value[germanyDataKey];
//     console.log(`Year ${timeLabel}: ${germanyData}`);
// });
