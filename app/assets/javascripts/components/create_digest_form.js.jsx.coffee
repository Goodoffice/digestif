@CreateDigestForm = React.createClass

  render: ->
    `<form className='create-digest-form'>
      <input type='email' placeholder='Your email'/>
      <CompositeTextField name='source_urls' placeholder="RSS URL"/>

      <input type="submit" value="Send my first Digest"/>
    </form>`

