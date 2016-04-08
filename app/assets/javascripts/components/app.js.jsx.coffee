@App = React.createClass

  componentWillMount: ->
    @

  componentDidUpdate: ->
    @

  componentWillUnmount: ->
    @

  onChange: (state) ->
    @setState(state)

  render: ->
    `<div className='app'>
      <h1>RSS to your inbox every&nbsp;morning.</h1>
      <h2>Digestif sends you an email digest of your RSS&nbsp;feeds.</h2>

      <CreateDigestForm />
     </div>`

