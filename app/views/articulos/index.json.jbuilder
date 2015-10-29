json.array!(@articulos) do |articulo|
  json.extract! articulo, :id, :name, :price
  json.url articulo_url(articulo, format: :json)
end
