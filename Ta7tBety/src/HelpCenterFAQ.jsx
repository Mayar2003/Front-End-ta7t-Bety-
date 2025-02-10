function HelpCenterFAQ() {
  return (
    <>
      <div className="FAQ">
        <h2 className="FAQheading">FAQ</h2>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed "
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum eos cumque molestias repellat, corrupti, ullam laborum,
                  quis fuga aliquid rem unde deserunt. Quae illum ullam ut
                  quaerat et fuga inventore!
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum eos cumque molestias repellat, corrupti, ullam laborum,
                  quis fuga aliquid rem unde deserunt. Quae illum ullam ut
                  quaerat et fuga inventore!
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum eos cumque molestias repellat, corrupti, ullam laborum,
                  quis fuga aliquid rem unde deserunt. Quae illum ullam ut
                  quaerat et fuga inventore!
                </p>{" "}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
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
