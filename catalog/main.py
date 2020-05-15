from bokeh.io import curdoc
from bokeh.layouts import column
from bokeh.plotting import figure
from bokeh.models.sources import ColumnDataSource

source = ColumnDataSource(dict(x=list(range(5)), y=list(range(5))))
p = figure(width=300, height=300, tools=[], toolbar_location=None, name="test")
p.line(x='x', y='y', source=source)
curdoc().add_root(column(p, sizing_mode='scale_width'))
