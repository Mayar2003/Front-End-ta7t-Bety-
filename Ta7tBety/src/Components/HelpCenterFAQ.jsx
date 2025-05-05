function HelpCenterFAQ() {
  return (
    <>
      <div className="FAQ">
        <h2 className="FAQheading">FAQ</h2>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Can I Track my order’s delivery status?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum eos cumque molestias repellat, corrupti, ullam laborum,
                  quis fuga aliquid rem unde deserunt. Quae illum ullam ut
                  quaerat et fuga inventore!
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Can I save my favorite items for later?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum eos cumque molestias repellat, corrupti, ullam laborum,
                  quis fuga aliquid rem unde deserunt. Quae illum ullam ut
                  quaerat et fuga inventore!
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How do I contact customer support?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum eos cumque molestias repellat, corrupti, ullam laborum,
                  quis fuga aliquid rem unde deserunt. Quae illum ullam ut
                  quaerat et fuga inventore!
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How to add Review
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum eos cumque molestias repellat, corrupti, ullam laborum,
                  quis fuga aliquid rem unde deserunt. Quae illum ullam ut
                  quaerat et fuga inventore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HelpCenterFAQ;
