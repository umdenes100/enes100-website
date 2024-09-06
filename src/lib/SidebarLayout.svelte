<style>
    .sidebar {
        width: 200px;
        background-color: rgba(226, 24, 51, 0.5);
        border: 2px solid white;
        border-top: 0;
        padding: 5px 20px 20px;
        margin-left: 80px;
        color: white;
        position: sticky;
        top: 15px;
    }

    .sidebar h1 {
        color: white;
        font-size: 20px;
        padding-bottom: 4px;
        border-bottom: 3px solid rgba(255, 255, 255, 0.15);
    }

    :global(.sidebar a) {
        display: block;
        color: white;
        text-decoration: none;
        font-size: 15px;
        line-height: 25px;
    }

    :global(.sidebar a:hover) {
        color: rgba(255, 210, 0, 1.00);
    }

    .main {
        margin: 40px 80px;
        border: 2px solid white;
        height: 100%;
        background-color: #121B21;
        padding: 10px 40px 20px 40px;
        width: 100%;
    }
</style>

<div style="display: flex; flex: 1">
    <div>
        <div class="sidebar">
            <h1>Page Index</h1>
            <slot name="sidebar"></slot>
        </div>
    </div>
    <div class="main">
        <slot></slot>
    </div>
</div>