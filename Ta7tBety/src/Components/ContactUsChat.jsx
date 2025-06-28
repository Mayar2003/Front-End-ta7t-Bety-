function ContactUsChat() {
  return (
    <>
    <div className="ContactusChat">
       <div className="ProviderName flex justContentSpaceArround">
        <img src="../../Graduation project assestst/Graduation project/user.png" alt="" />
        <div className="ProviderStatus">
        <h5>Provider Name</h5>
        <p className="textAlignLeft">status</p>
        </div>
       </div>

       <div className="Chat">
        <div className="ProviderMessage flex">
            <img src="../../Graduation project assestst/Graduation project/user.png" alt="" />
            <div className="ProviderMessageContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, hic!
            </div>
        </div>


        <div className="UserMessage flex">
            <div className="UserMessageContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, hic!
            </div>
            <img src="../../Graduation project assestst/Graduation project/user.png" alt="" />
        </div>
       </div>


       <div className="TypeMessegeinput flex W100 JustifyContentCenter ">
        <div className="inputmessege W80">
        <input className="W100" type="text" name="" id=""  placeholder="Type here..."/>
        {/* <i class="fa-solid fa-microphone"></i> */}
        </div>
        <div className="Sendbttn">
            <button><i class="fa-brands fa-telegram"></i></button>
        </div>
       </div>
    </div>
    </>
  );
}
export default ContactUsChat;