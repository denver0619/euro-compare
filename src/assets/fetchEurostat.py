from pyjstat import pyjstat

url = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nama_10_gdp?format=JSON&lang=EN&time=2019"

dataset = pyjstat.Dataset.read(url)

df = dataset.write('dataframe')
print(df)

dataset_from_df = pyjstat.Dataset.read(df)

f = open("ppp.json", "w")
f.write(dataset_from_df.write())
f.flush
f.close