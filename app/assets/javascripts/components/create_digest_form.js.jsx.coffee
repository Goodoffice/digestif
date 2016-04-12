@CreateDigestForm = React.createClass

  render: ->
    `<form onSubmit={this.handleSubmit} className='create-digest-form'>
      <input type='email' ref='email' placeholder='&#8627; Enter your email'/>
      <input type='text' ref='name' placeholder='&#8627; Name your digest (e.g. "Daily News" or "Freelance Gigs")' />
      <CompositeTextField ref='sourceUrls' name='source_urls' initialPlaceholder="&#8627; Enter a URL to an RSS feed" placeholder="&#8627; Enter another RSS URL, if you want" />

      <div className='button-group'>
        <input className='button' type="submit" value="Send your first Digest &#8658;"/>
      </div>
    </form>`

  handleSubmit: (event) ->
    event.preventDefault()
    SourceListActions.createSourceList
      name: @refs.name.value
      author_attributes:
        email: @refs.email.value
      source_urls: @refs.sourceUrls.getValues()
    return false

